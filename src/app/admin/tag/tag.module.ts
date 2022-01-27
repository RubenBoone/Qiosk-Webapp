import { NgModule } from '@angular/core';
import { TagFormComponent } from './tag-form/tag-form.component';
import { TagTableComponent } from './tag-table/tag-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagService } from './tag.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { SecurityInterceptor } from 'src/app/security/security.interceptor';

@NgModule({
  declarations: [
    TagTableComponent,
    TagFormComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TagTableComponent,
    TagFormComponent
  ],
  providers: [
    TagService,
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }*/
  ]
})
export class TagModule { }
