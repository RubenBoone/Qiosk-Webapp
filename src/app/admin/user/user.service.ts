import { Injectable } from '@angular/core';
import { User } from './users-table/user';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl= GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + "users");
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + "users/" + id);
  }

  postUser(user: User): Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<User>(this.baseUrl + '/users', user, {
      headers: headers,
    });
  }

  putUser(id: number, user: User): Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<User>(this.baseUrl + 'users/' + id, user, {
      headers: headers,
    });
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(this.baseUrl + 'users/' + id);
  }
}
