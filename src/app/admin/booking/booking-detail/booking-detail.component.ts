import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompanyService } from '../../user/company.service';
import { Company } from '../../user/users-table/company';
import { User } from '../../user/users-table/user';
import { Booking } from '../booking-table/booking';
import { BookingService } from '../booking.service';
import { UserBooking } from '../user-booking';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss'],
})
export class BookingDetailComponent implements OnInit, OnDestroy {
  bookingID: number = 0;

  company: Company = { companyID: 0, name: '' };
  user: User = {
    userID: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isActive: false,
    isAdmin: false,
    companyID: 0,
    company: this.company
  };
  userBooking: UserBooking = { userID: 0, bookingID: 0, userBookingID: 0 };

  booking: Booking = {
    bookingID: 0,
    bookingTime: new Date(),
    companyId: 0,
    company: this.company,
    userBooking: this.userBooking,
  };

  booking$: Subscription = new Subscription();

  constructor(private router: Router, private bookingService: BookingService) {
    this.bookingID = +this.router.getCurrentNavigation()?.extras.state?.id;
    if (this.bookingID != null && this.bookingID > 0) {
      this.booking$ = this.bookingService.getBooking(this.bookingID).subscribe(result => this.booking = result);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.booking$.unsubscribe();
  }
}
