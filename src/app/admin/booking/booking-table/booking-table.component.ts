import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageApp } from 'src/app/shared/datatables/languages';
import { Company } from '../../user/users-table/company';
import { BookingService } from '../booking.service';
import { UserBooking } from '../user-booking';
import { UserBookingService } from '../user-booking.service';
import { Booking } from './booking';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss'],
})
export class BookingTableComponent implements OnInit, OnDestroy {
  bookings: Booking[] = [];
  userBookings: UserBooking[] = [];
  userBookings$: Subscription = new Subscription();
  bookings$: Subscription = new Subscription();
  deleteBooking$: Subscription = new Subscription();

  company: Company = { name: '', companyID: 0 };
  userBooking: UserBooking = { userID: 0, bookingID: 0, userBookingID: 0 };
  booking: Booking = {
    bookingID: 0,
    bookingTime: new Date(),
    companyId: 0,
    company: this.company,
    userBooking: this.userBooking,
  };
  errorMessage: string = '';

  dtOptions: DataTables.Settings = {};

  constructor(
    private router: Router,
    private bookingService: BookingService,
    private userBookingService: UserBookingService
  ) {}

  ngOnInit(): void {
    this.dtOptions = { language: LanguageApp.dutch_datatables };
    this.getBookings();
  }

  ngOnDestroy(): void {
    this.bookings$.unsubscribe();
    this.deleteBooking$.unsubscribe();
  }

  detail(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['admin/boekingen/detail'], {
      state: { id: id },
    });
  }

  delete(id: number) {
    this.deleteBooking$ = this.bookingService.deleteBooking(id).subscribe(
      (result) => {
        //all went well
        this.getBookings();
      },
      (error) => {
        //error
        this.errorMessage = error.message;
      }
    );
  }

  getBookings() {
    this.bookings$ = this.bookingService.getBookings().subscribe((result) => {
      this.bookings = result;
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['admin/boeking/', id]);
  }
}
