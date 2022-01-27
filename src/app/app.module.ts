import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======

import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
>>>>>>> f15993dfaff9a6116318e883ffd6b77c9029a25c

import { AppComponent } from './app.component';
import { BookingModule } from './booking/booking.modules';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent
  ],
<<<<<<< HEAD
  imports: [SharedModule, BookingModule],
=======
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BookingModule],
>>>>>>> f15993dfaff9a6116318e883ffd6b77c9029a25c
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
