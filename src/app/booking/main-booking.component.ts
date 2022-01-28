import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Booking } from '../admin/bookings-table/booking';
import { BookingService } from '../admin/bookings-table/booking.service';
import { Company } from '../admin/users-table/company';
import { CompanyService } from '../admin/users-table/company.service';
import { User } from '../admin/users-table/user';
import { UserService } from '../admin/users-table/user.service';

@Component({
  selector: 'app-main-booking',
  templateUrl: './main-booking.component.html',
  styleUrls: ['./main-booking.component.scss'],
})
export class MainBookingComponent implements OnInit {
  @Input() step: number = 2;
  @Input() booking: Booking = { bookingID: 0, bookingTime: new Date() };
  company: Company = { companyID: 0, name: '' };
  @Input() date: Date = new Date();
  @Input() time: string = '';
  user: User = {
    userID: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isActive: true,
    isAdmin: false,
    companyID: 0,
    company: this.company,
  };

  dateArray: Array<number> = [];
  timeArray: Array<number> = [];
  companyId: number = 0;

  organisator = this.user;

  extraUsers: Array<Array<string>> = [];

  postBooking$: Subscription = new Subscription();
  postCompany$: Subscription = new Subscription();
  postUser$: Subscription = new Subscription();

  constructor(
    private bookingService: BookingService,
    private companyService: CompanyService,
    private userService: UserService
  ) {
    this.step = 1;
  }

  SelectDate(date: Date, time: string) {
    console.log();
    date
      .toString()
      .split('-')
      .forEach((date) => {
        this.dateArray.push(Number(date));
      });

    time
      .toString()
      .split(':')
      .forEach((time) => {
        this.timeArray.push(Number(time));
      });

    var bookingDate: Date = new Date(
      this.dateArray[0],
      this.dateArray[1] - 1,
      this.dateArray[2],
      this.timeArray[0] + 1,
      this.timeArray[1]
    );

    this.booking = { bookingID: 0, bookingTime: bookingDate };
    console.log(this.booking);
  }

  TakeStep() {
    switch (this.step) {
      case 1:
        this.SelectDate(this.date, this.time);
        this.step = 2;
        break;
      case 2:
        this.step = 1;
        break;
      default:
        this.step = 1;
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.postBooking$.unsubscribe();
    this.postCompany$.unsubscribe();
    this.postUser$.unsubscribe();
  }

  async postOrganisator() {
    this.postUser$ = (
      await this.userService.postUser(this.organisator)
    ).subscribe(
      (result) => {
        console.log('Submitted organisator');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async postCompany() {
    this.postCompany$ = this.companyService.postCompany(this.company).subscribe(
      (result) => {
        console.log('Submitted company');
        this.companyId = result.companyID;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async onSubmit() {
    this.postBooking$ = this.bookingService.postBooking(this.booking).subscribe(
      (result) => {
        console.log('Submitted booking');
      },
      (error) => {
        console.log(error);
      }
    );

    this.company.name = this.companyName;
    this.organisator.company.name = this.companyName;

    await this.postCompany();

    this.organisator.companyID = this.companyId;
    this.organisator.company.companyID = this.companyId;
    this.organisator.company.name = this.companyName;
    this.organisator.firstName = this.firstname;
    this.organisator.lastName = this.lastname;
    this.organisator.email = this.email;
    this.organisator.password = this.password;

    await this.postOrganisator();

    this.user = this.organisator;
    console.log('user: ' + this.user);

    this.extraUsers.forEach(async (element) => {
      // 2 = email - 0= firstname - 1 = lastname
      this.user.email = element[2];
      this.user.firstName = element[0];
      this.user.lastName = element[1];
      this.postUser$ = (await this.userService.postUser(this.user)).subscribe(
        (result) => {
          console.log('Submitted user');
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  /*
  Date Picker
  */

  nextStep() {
    this.step = 2;
  }

  /*
  Booking Form
  */

  @Input() companyName: string = '';
  @Input() email: string = '';
  @Input() firstname: string = '';
  @Input() lastname: string = '';
  @Input() password: string = '';
  @Input() extraEmail: string = '';
  @Input() extraFirstName: string = '';
  @Input() extraLastName: string = '';

  // Add extra User
  @Input() addExtraUser() {
    this.extraUsers.push([
      this.extraFirstName,
      this.extraLastName,
      this.extraEmail,
    ]);

    this.extraEmail = '';
    this.extraFirstName = '';
    this.extraLastName = '';
  }

  // Remove extra user
  @Input() deleteExtraUser(msg: string) {
    let index = 0;
    this.extraUsers.forEach((element) => {
      if (element[0] == msg) {
        index = this.extraUsers.indexOf(element);
      }
    });

    this.extraUsers.splice(index, 1);
  }
}
