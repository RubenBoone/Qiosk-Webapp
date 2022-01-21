import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-booking',
  templateUrl: './main-booking.component.html',
  styleUrls: ['./main-booking.component.scss'],
})
export class MainBookingComponent implements OnInit {
  @Input() step: number = 1;

  goToNextStep() {
    console.log('stepped');
    this.step = 2;
  }

  constructor() {
    this.step = 1;
  }

  ngOnInit(): void {}
}
