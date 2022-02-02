import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { KioskTableComponent } from './kiosk-table/kiosk-table.component';
import { KioskFormComponent } from './kiosk-form/kiosk-form.component';
import { KioskService } from './kiosk.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';
import { KioskRoutingModule } from './kiosk-routing.module';



@NgModule({
  declarations: [
    KioskTableComponent,
    KioskFormComponent
  ],
  imports: [
    SharedModule,
    KioskRoutingModule
  ], 
  exports: [
    KioskTableComponent,
    KioskFormComponent
  ],
  providers: [
    KioskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    },
  ]
})
export class KioskModule { }
