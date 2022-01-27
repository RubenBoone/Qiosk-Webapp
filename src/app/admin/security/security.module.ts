import { NgModule } from '@angular/core';
import { SecurityComponent } from './security/security.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security.interceptor';



@NgModule({
  declarations: [
    SecurityComponent
  ],
  exports:[
    SecurityComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class SecurityModule { }
