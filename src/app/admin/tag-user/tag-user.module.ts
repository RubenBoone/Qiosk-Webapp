import { NgModule } from '@angular/core';

import { TaguserTableComponent } from './taguser-table/taguser-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';
import { TaguserService } from './taguser.service';
import { TaguserRoutingModule } from './tag-user-routing.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TagService } from '../tag/tag.service';
import { UserService } from '../user/user.service';

@NgModule({
  declarations: [ TaguserTableComponent],
  imports: [SharedModule, TaguserRoutingModule],
  exports: [ TaguserTableComponent],
  providers: [
    TaguserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    },
    TagService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    },
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    },
    BsModalService
  ],
})
export class TagUserModule {}
