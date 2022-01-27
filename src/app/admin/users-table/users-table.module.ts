import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecurityInterceptor } from '../security/security.interceptor';
import { UserService } from './user.service';
import { UsersTableComponent } from './users-table.component';



@NgModule({
  declarations: [UsersTableComponent],
  imports: [
    SharedModule
  ],exports:[UsersTableComponent],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class UsersTableModule { }
