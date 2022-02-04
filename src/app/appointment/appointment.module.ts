import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SharedModule } from '../shared/shared.module';
import { UserbookingService } from './userbooking.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../admin/security/security.interceptor';

@NgModule({
  declarations: [MainComponent, BookingFormComponent, DatePickerComponent],
  imports: [SharedModule],
  exports: [MainComponent, BookingFormComponent, DatePickerComponent],
  providers: [
    UserbookingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class AppointmentModule {}
