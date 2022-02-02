import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }

  getBookingsDash(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(GlobalConstants.apiURL+"Bookings/bookingsDash");
  }
}
