import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SecurityModule } from './security/security.module';



@NgModule({
  declarations: [],
  imports: [
    AdminRoutingModule,
    SharedModule
  ]

})
export class AdminModule { }
