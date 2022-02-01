import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { UserBooking } from './user-booking';

@Injectable({
  providedIn: 'root',
})
export class UserBookingService {
  baseUrl = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  getUserBookings(): Observable<UserBooking[]> {
    return this.httpClient.get<UserBooking[]>(this.baseUrl + 'userbookings');
  }

  getUserBooking(id: number): Observable<UserBooking> {
    return this.httpClient.get<UserBooking>(
      this.baseUrl + 'userbookings/' + id
    );
  }
}
