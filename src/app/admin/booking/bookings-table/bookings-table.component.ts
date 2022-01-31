import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking';
import { Subscription } from 'rxjs';
import { LanguageApp } from 'src/app/shared/datatables/languages';
import { Router } from '@angular/router';
import { UserBookingService } from '../user-booking.service';
import { UserBooking } from '../user-booking';
import { Company } from '../../user/users-table/company';

@Component({
  selector: 'app-bookings-table',
  templateUrl: './bookings-table.component.html',
  styleUrls: ['./bookings-table.component.scss'],
})
export class BookingsTableComponent implements OnInit, OnDestroy {
  bookings: Booking[] = [];
  userBookings: UserBooking[] = [];
  bookings$: Subscription = new Subscription();
  userBookings$: Subscription = new Subscription();
  deleteBooking$: Subscription = new Subscription();

  company: Company = { name: '', companyID: 0 };
  booking: Booking = {
    bookingID: 0,
    bookingTime: new Date(),
    companyId: 0,
    company: this.company,
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
    this.getUserBookings();
    console.log(this.bookings, this.userBookings);
  }

  ngOnDestroy(): void {
    this.bookings$.unsubscribe();
    this.deleteBooking$.unsubscribe();
  }

  add() {
    this.router.navigate(['admin/bookings/form'], { state: { mode: 'add' } });
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['admin/bookings/form'], {
      state: { id: id, mode: 'edit' },
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
  getUserBookings() {
    this.userBookings$ = this.userBookingService
      .getUserBookings()
      .subscribe((result) => {
        this.userBookings = result;
      });
  }
}
