import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { Kiosk } from '../kiosk-table/kiosk';

@Injectable({
  providedIn: 'root'
})
export class KioskService {

  constructor(private httpClient: HttpClient) { }

  getKiosksDash(): Observable<Kiosk[]> {
    return this.httpClient.get<Kiosk[]>(GlobalConstants.apiURL+"Kiosks/kiosksDash");
  }
}
