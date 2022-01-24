import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
//mag niet weg
import { SecurityModule } from './security/security.module';
import { UsersTableModule } from './users-table/users-table.module';



@NgModule({
  declarations: [],
  imports: [
    AdminRoutingModule
  ]

})
export class AdminModule { }
