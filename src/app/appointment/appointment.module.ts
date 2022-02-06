import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UserbookingService } from './userbooking.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../admin/security/security.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [MainComponent, BookingFormComponent, DatePickerComponent, ConfirmationComponent],
  imports: [SharedModule,MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule],
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
