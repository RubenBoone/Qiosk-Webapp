import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatePickerComponent } from './booking/date-picker/date-picker.component';
import { BookingFormComponent } from './booking/booking-form/booking-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: DatePickerComponent },
  { path: 'booking2', component: BookingFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
