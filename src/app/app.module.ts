import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationMobileComponent } from './navigation-mobile/navigation-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent,
    NavigationMobileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
