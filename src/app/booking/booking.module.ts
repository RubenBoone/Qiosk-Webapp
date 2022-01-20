import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BookingFormComponent } from './booking-form/booking-form.component';



@NgModule({
  declarations: [
    DatePickerComponent,
    BookingFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookingModule { }
