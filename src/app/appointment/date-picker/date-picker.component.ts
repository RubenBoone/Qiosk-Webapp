import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Output() goToNextStep = new EventEmitter<{ date: Date; time: string }>();

  negen :boolean=true;
  een:boolean=true;
  times: Number[]=[1,2];
  constructor() {}

  @Input() date: Date = new Date();
  @Input() time: string = '';

  nextStep() {
    this.goToNextStep.emit({
      date: this.date,
      time: this.time,
    });
  }

  ngOnInit(): void {}
}
