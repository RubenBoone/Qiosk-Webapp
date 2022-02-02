import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';

import { Kiosk } from './kiosk-table/kiosk';

@Injectable({
  providedIn: 'root',
})
export class KioskService {
  baseUrl = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  getKiosks(): Observable<Kiosk[]> {
    return this.httpClient.get<Kiosk[]>(this.baseUrl + 'kiosks');
  }

  getKiosk(id: number): Observable<Kiosk> {
    return this.httpClient.get<Kiosk>(this.baseUrl + 'kiosks/' + id);
  }

  postKiosk(kiosk: Kiosk): Observable<Kiosk> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Kiosk>(this.baseUrl + 'kiosks', kiosk, {
      headers: headers,
    });
  }

  putKiosk(id: number, kiosk: Kiosk): Observable<Kiosk> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Kiosk>(this.baseUrl + 'kiosks/' + id, kiosk, {
      headers: headers,
    });
  }

  deleteKiosk(id: number): Observable<Kiosk> {
    return this.httpClient.delete<Kiosk>(this.baseUrl + 'kiosks/' + id);
  }
}