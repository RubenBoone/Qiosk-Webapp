import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingsTableComponent } from './bookings-table/bookings-table.component';

const routes: Routes = [
  { path: '', component: BookingsTableComponent },
  { path: ':id', component: BookingDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
