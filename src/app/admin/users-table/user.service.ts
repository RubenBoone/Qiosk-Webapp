import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + 'Users');
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + 'Users/' + id);
  }

  async postUser(user: User): Promise<Observable<User>> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return await this.httpClient.post<User>(this.baseUrl + 'users', user, {
      headers: headers,
    });
  }
}
