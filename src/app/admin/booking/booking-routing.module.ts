import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingTableComponent } from './booking-table/booking-table.component';

const routes: Routes = [
  { path: '', component: BookingTableComponent },
  { path: ':id', component: BookingDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
