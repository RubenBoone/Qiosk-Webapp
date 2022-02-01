import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Company } from '../admin/user/users-table/company';
import { CompanyService } from '../admin/user/company.service';
import { User } from '../admin/user/users-table/user';
import { UserService } from '../admin/user/user.service';
import { BookingService } from '../admin/booking/bookings-table/booking.service';
import { Booking } from '../admin/booking/bookings-table/booking';
import { UserBooking } from '../admin/booking/user-booking';

@Component({
  selector: 'app-main-booking',
  templateUrl: './main-booking.component.html',
  styleUrls: ['./main-booking.component.scss'],
})
export class MainBookingComponent implements OnInit {
  @Input() step: number = 2;
  company: Company = { companyID: 0, name: '' };
  userBooking: UserBooking = { userID: 0, bookingID: 0, userBookingID: 0 };
  @Input() booking: Booking = {
    bookingID: 0,
    bookingTime: new Date(),
    companyId: 0,
    company: this.company,
    userBooking: this.userBooking,
  };
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

  date: Array<number> = [];
  time: Array<number> = [];
  companyId: number = 0;

  organisator: User = {
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
  extraUsers: Array<Array<string>> = [];

  postBooking$: Subscription = new Subscription();
  postCompany$: Subscription = new Subscription();
  postUser$: Subscription = new Subscription();

  goToNextStep(date: Date, time: string) {
    console.log();
    date
      .toString()
      .split('-')
      .forEach((date) => {
        this.date.push(Number(date));
      });

    time
      .toString()
      .split(':')
      .forEach((time) => {
        this.time.push(Number(time));
      });

    var bookingDate: Date = new Date(
      this.date[0],
      this.date[1] - 1,
      this.date[2],
      this.time[0],
      this.time[1]
    );

    this.booking = {
      bookingID: 0,
      bookingTime: bookingDate,
      companyId: 0,
      company: this.company,
      userBooking: this.userBooking,
    };

    this.step = 2;
  }

  getUserData(organisator: User, users: Array<Array<string>>) {
    this.organisator = organisator;
    this.extraUsers = users;
    this.company.name = organisator.company.name;
    this.onSubmit();
  }

  constructor(
    private bookingService: BookingService,
    private companyService: CompanyService,
    private userService: UserService
  ) {
    this.step = 1;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.postBooking$.unsubscribe();
    this.postCompany$.unsubscribe();
    this.postUser$.unsubscribe();
  }

  onSubmit() {
    this.postBooking$ = this.bookingService.postBooking(this.booking).subscribe(
      (result) => {
        console.log('Submitted booking');
      },
      (error) => {
        console.log(error);
      }
    );

    this.postCompany$ = this.companyService.postCompany(this.company).subscribe(
      (result) => {
        console.log('Submitted company');
      },
      (error) => {
        console.log(error);
      }
    );

    this.organisator.companyID = this.companyId;
    this.organisator.company = this.company;

    this.user = this.organisator;

    this.postUser$ = this.userService.postUser(this.organisator).subscribe(
      (result) => {
        console.log('Submitted organisator');
      },
      (error) => {
        console.log(error);
      }
    );

    this.extraUsers.forEach((element) => {
      // 2 = email - 0= firstname - 1 = lastname
      this.user.email = element[2];
      this.user.firstName = element[0];
      this.user.lastName = element[1];
      this.postUser$ = this.userService.postUser(this.user).subscribe(
        (result) => {
          console.log('Submitted user');
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
