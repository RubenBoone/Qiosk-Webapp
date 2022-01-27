import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
//mag niet weg
import { UsersTableModule } from './users-table/users-table.module';
import { TagModule } from './tag/tag.module';
import { SharedModule } from '../shared/shared.module';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AdminRoutingModule,
    SecurityModule,
    TagModule,
    UsersTableModule
  ],
  exports: [
    TagModule,
    UsersTableModule
  ]
})
export class AdminModule {}
