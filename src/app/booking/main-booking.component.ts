import { Component, Input, OnInit, Output } from '@angular/core';
import { Booking } from '../admin/bookings-table/booking';

@Component({
  selector: 'app-main-booking',
  templateUrl: './main-booking.component.html',
  styleUrls: ['./main-booking.component.scss'],
})
export class MainBookingComponent implements OnInit {
  @Input() step: number = 1;
  @Input() booking: Booking = { bookingID: 0, bookingTime: new Date() };

  goToNextStep(date: Date, time: string) {
    console.log('stepped');
    console.log(date, time);
    this.step = 2;
  }

  constructor() {
    this.step = 1;
  }

  ngOnInit(): void {}
}
