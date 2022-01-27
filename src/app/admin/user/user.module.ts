import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';
import { SecurityInterceptor } from '../security/security.interceptor';



@NgModule({
  declarations: [
    UsersTableComponent,
    UserFormComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  exports: [
    UsersTableComponent,
    UserFormComponent
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class UserModule { }
