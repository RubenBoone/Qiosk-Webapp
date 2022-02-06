import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBooking } from '../admin/booking/user-booking';
import { GlobalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class UserbookingService {
  baseUrl = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  postUserBooking(userBooking: UserBooking): Observable<UserBooking> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<UserBooking>(this.baseUrl + 'userbookings', userBooking, {
      headers: headers,
    });
  }
  getAvailableTimesForDate(d:string ): Observable<number[]> {
    return this.httpClient.get<number[]>(this.baseUrl + "bookings/slots/"+d);
  }

}
