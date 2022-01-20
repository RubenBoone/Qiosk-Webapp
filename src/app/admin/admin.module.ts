import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsTableComponent } from './bookings-table/bookings-table.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { LinkTagComponent } from './link-tag/link-tag.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    BookingsTableComponent,
    UsersTableComponent,
    BookingDetailComponent,
    LinkTagComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
