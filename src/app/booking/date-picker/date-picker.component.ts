import { Time } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Booking } from 'src/app/admin/bookings-table/booking';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  // @Output() goToNextStep = new EventEmitter<{ date: Date; time: string }>();
  // constructor() {}

  // @Input() date: Date = new Date();
  // @Input() time: string = '';

  ngOnInit(): void {}
}
