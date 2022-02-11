import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookingService } from 'src/app/admin/booking/booking.service';
import { Booking } from 'src/app/admin/booking/booking-table/booking';
import { UserBooking } from 'src/app/admin/booking/user-booking';
import { EncryptionService } from 'src/app/admin/security/encryption.service';
import { User } from 'src/app/admin/user/users-table/user';
import { UserService } from 'src/app/admin/user/user.service';
import { Company } from 'src/app/admin/user/users-table/company';
import { UserbookingService } from '../userbooking.service';
import { MailService } from 'src/app/shared/mail/mail.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() step: number = 2;
  company: Company = { companyID: 0, name: '' };
  userBooking: UserBooking = { userID: 0, bookingID: 0, userBookingID: 0};
  @Input() booking: Booking = {
    bookingID: 0,
    bookingTime: new Date(),
    companyId: this.company.companyID,
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
  d:Date=new Date();
  t:string="";
  postBooking$: Subscription = new Subscription();
  postUser$: Subscription = new Subscription();
  postUserBooking$: Subscription = new Subscription();

  goToNextStep(date: Date, time: string) {
    this.d=date;
    this.t=time;
    console.log(date);
    date.toLocaleDateString
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
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
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
    private userService: UserService,
    private userBookingService: UserbookingService,
    private encryptionService: EncryptionService,
    private mailService : MailService
  ) {
    this.step = 1;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.postBooking$.unsubscribe();
    this.postUser$.unsubscribe();
    this.postUserBooking$.unsubscribe();
  }

  onSubmit() {
    console.log(this.booking)
    this.postBooking$ = this.bookingService.postBooking(this.booking).subscribe(
      (result) => {
        console.log('Submitted booking');
        this.userBooking.bookingID=result.bookingID
        //org
        this.organisator.companyID=result.companyId
        this.organisator.company=result.company
        this.organisator.password = this.encryptionService.encrypt(this.organisator.password);
        this.user = this.organisator;
       //post org
        this.postUser$ = this.userService.postUser(this.organisator).subscribe(
         async (result) => {
        console.log('Submitted organisator');
        this.composeAndSendMail(result)
        //relatie
        this.userBooking.userID=result.userID;
        console.log(this.userBooking)
        this.postUserBooking$ =await this.userBookingService.postUserBooking(this.userBooking).subscribe(
          (result) => {console.log('relatie initiated')})
        this.extraUsers.forEach((element) => {
          // 2 = email - 0= firstname - 1 = lastname
          this.user.email = element[2];
          this.user.firstName = element[0];
          this.user.lastName = element[1];
          this.user.companyID = result.companyID;
          this.user.company = result.company;
          this.postUser$ = this.userService.postUser(this.user).subscribe(
            async (result) => {
              console.log('Submitted user');
              this.composeAndSendMail(result)
              this.userBooking.userID=result.userID
              this.postUserBooking$ =await this.userBookingService.postUserBooking(this.userBooking).subscribe(
              (result) => {console.log('relatie initiated')})
            },
            (error) => {
              console.log(error);
            }
          );
        });
      },
      (error) => {
        console.log(error);
      }
    );
      },
      (error) => {
        console.log(error);
      }
    );


  }
  composeAndSendMail(user :User) {
    var msg = "<style>" +
      "</style>" +
      "<div>" +
      "<i style='color: green' class='far fa-check-circle fa-7x'></i>" +
      "</div>" +
      "<p>Dag "+user.firstName+"</p>"+
      "<p>Hierbij een bevestiging van uw bezoek aan het Experience Center van Van Roey!</p>" +
      "<p class='mt-3 text-center'> <b> Wanneer:</b> "+this.d.toDateString() +" om "+this.t+" </p>"+
      "<p class='mt-3 text-center'> <b>Waar:</b> Antwerpseweg 116H, 2440 Geel</p>";


    this.mailService.sendMail({

      "recipientEmail": user.email,
      "recipientName": user.firstName+" "+user.lastName,
      "subject": "Van Roey Experience Center reservatie; ",
      "message": msg
    }).subscribe(
      data => {
        console.log("Mail sent: ", data)
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }
}
