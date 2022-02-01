import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent, BookingFormComponent, DatePickerComponent],
  imports: [SharedModule],
  exports: [MainComponent, BookingFormComponent, DatePickerComponent],
})
export class AppointmentModule {}
