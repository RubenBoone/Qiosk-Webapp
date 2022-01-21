import { NgModule } from '@angular/core';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SharedModule } from '../shared/shared.module';
import { MainBookingComponent } from './main-booking.component';

@NgModule({
  declarations: [
    DatePickerComponent,
    BookingFormComponent,
    MainBookingComponent,
  ],
  imports: [SharedModule],
  exports: [],
})
export class BookingModule {}
