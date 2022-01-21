import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl= GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl+"Users");
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl+"Users/" + id);
  }
}
