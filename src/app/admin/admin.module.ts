import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SecurityModule } from './security/security.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DataVisComponent } from './data-vis/data-vis.component';

@NgModule({
  declarations: [
    DataVisComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    SecurityModule,
    DashboardModule
  ],
  exports: []
})
export class AdminModule {}
