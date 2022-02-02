import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecurityInterceptor } from '../security/security.interceptor';
import { BookingService } from './booking.service';
import { DashboardComponent } from './dashboard.component';
import { KioskService } from './kiosk.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule],
  exports: [DashboardComponent],
  providers: [
    BookingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    },
    KioskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class DashboardModule {}
