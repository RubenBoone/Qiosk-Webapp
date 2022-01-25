import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../shared/global-constants';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  baseUrl = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  getBookings(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.baseUrl + 'Companies');
  }

  getBooking(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.baseUrl + 'Companies/' + id);
  }

  postBooking(company: Company): Observable<Company> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Company>(this.baseUrl + '/companies', company, {
      headers: headers,
    });
  }

  putBooking(id: number, company: Company): Observable<Company> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Company>(
      this.baseUrl + 'Companies/' + id,
      company,
      { headers: headers }
    );
  }

  deleteBooking(id: number): Observable<Company> {
    return this.httpClient.delete<Company>(this.baseUrl + 'Companies/' + id);
  }
}
