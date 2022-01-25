import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
//mag niet weg
import { SecurityModule } from './security/security.module';
import { UsersTableModule } from './users-table/users-table.module';
import { KioskTableComponent } from './kiosk-table/kiosk-table.component';
import { TagTableComponent } from './tag-table/tag-table.component';

@NgModule({
  declarations: [
    KioskTableComponent,
    TagTableComponent
  ],

  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule {}
