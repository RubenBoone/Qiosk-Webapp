import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';

import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  baseUrl = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(this.baseUrl + 'bookings');
  }

  getBooking(id: number): Observable<Booking> {
    return this.httpClient.get<Booking>(this.baseUrl + 'Bookings/' + id);
  }

  postBooking(booking: Booking): Observable<Booking> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Booking>(this.baseUrl + '/bookings', booking, {
      headers: headers,
    });
  }

  putBooking(id: number, booking: Booking): Observable<Booking> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Booking>(
      this.baseUrl + 'Bookings/' + id,
      booking,
      { headers: headers }
    );
  }

  deleteBooking(id: number): Observable<Booking> {
    return this.httpClient.delete<Booking>(this.baseUrl + 'Bookings/' + id);
  }
}
