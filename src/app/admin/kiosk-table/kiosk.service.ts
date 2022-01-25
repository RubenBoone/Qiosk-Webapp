import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';

import { Kiosk } from './kiosk';

@Injectable({
  providedIn: 'root',
})
export class KioskService {
  baseUrl = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  getBookings(): Observable<Kiosk[]> {
    return this.httpClient.get<Kiosk[]>(this.baseUrl + 'Kiosks');
  }

  getBooking(id: number): Observable<Kiosk> {
    return this.httpClient.get<Kiosk>(this.baseUrl + 'Kiosks/' + id);
  }

  postBooking(kiosk: Kiosk): Observable<Kiosk> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Kiosk>(this.baseUrl + '/kiosks', kiosk, {
      headers: headers,
    });
  }

  putBooking(id: number, kiosk: Kiosk): Observable<Kiosk> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Kiosk>(this.baseUrl + 'Kiosks/' + id, kiosk, {
      headers: headers,
    });
  }

  deleteBooking(id: number): Observable<Kiosk> {
    return this.httpClient.delete<Kiosk>(this.baseUrl + 'Kiosks/' + id);
  }
}
