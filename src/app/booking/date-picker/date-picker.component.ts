import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Output() goToNextStep = new EventEmitter<{}>();

  constructor() {}

  nextStep() {
    console.log('instep');
    this.goToNextStep.emit({});
  }

  ngOnInit(): void {}
}
