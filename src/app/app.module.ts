import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

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
    NavigationComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, SharedModule, BookingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
