import { NgModule } from '@angular/core';
import { BookingsTableComponent } from './bookings-table/bookings-table.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingService } from './bookings-table/booking.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';
import { BookingRoutingModule } from './booking-routing.module';

@NgModule({
  declarations: [BookingsTableComponent, BookingDetailComponent],
  imports: [SharedModule, BookingRoutingModule],
  exports: [BookingDetailComponent, BookingsTableComponent],
  providers: [
    BookingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    },
  ],
})
export class BookingModule {}
