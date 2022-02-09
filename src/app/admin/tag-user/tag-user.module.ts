import { NgModule } from '@angular/core';

import { TaguserFormComponent } from './taguser-form/taguser-form.component';
import { TaguserTableComponent } from './taguser-table/taguser-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';
import { TaguserService } from './taguser.service';
import { TaguserRoutingModule } from './tag-user-routing.module';

@NgModule({
  declarations: [TaguserFormComponent, TaguserTableComponent],
  imports: [SharedModule, TaguserRoutingModule],
  exports: [TaguserFormComponent, TaguserTableComponent],
  providers: [
    TaguserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    },
  ],
})
export class TagUserModule {}
