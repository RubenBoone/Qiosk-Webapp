import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingModule } from './booking/booking.modules';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent,
  ],
  imports: [SharedModule, BookingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
