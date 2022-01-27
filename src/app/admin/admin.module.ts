import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AdminRoutingModule,
    SecurityModule
  ],
  exports: []
})
export class AdminModule {}
