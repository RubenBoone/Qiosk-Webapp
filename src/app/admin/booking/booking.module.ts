import { NgModule } from '@angular/core';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingService } from './booking.service';
import { BookingTableComponent } from './booking-table/booking-table.component';

@NgModule({
  declarations: [BookingTableComponent, BookingDetailComponent],
  imports: [SharedModule, BookingRoutingModule],
  exports: [BookingDetailComponent, BookingTableComponent],
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
