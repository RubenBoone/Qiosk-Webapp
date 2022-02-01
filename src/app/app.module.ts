import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AppointmentModule } from './appointment/appointment.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    AppointmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
