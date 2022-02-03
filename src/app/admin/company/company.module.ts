import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyTableComponent } from './company-table/company-table.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from './company.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';

@NgModule({
  declarations: [
    CompanyTableComponent,
    CompanyFormComponent
  ],
  imports: [
    SharedModule,
    CompanyRoutingModule
  ],
  exports: [
    CompanyTableComponent,
    CompanyFormComponent
  ],
  providers: [
    CompanyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class CompanyModule { }
