import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KioskFormComponent } from './kiosk-form/kiosk-form.component';
import { KioskTableComponent } from './kiosk-table/kiosk-table.component';

const routes: Routes = [
    { path: '', component: KioskTableComponent },
    { path: 'form', component: KioskFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KioskRoutingModule {}