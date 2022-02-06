import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { User } from '../security/user';
import { UserTag } from './taguser-table/taguser';

@Injectable({
  providedIn: 'root',
})
export class TaguserService {
  baseUrl = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  getUserTags(): Observable<UserTag[]> {
    return this.httpClient.get<UserTag[]>(this.baseUrl + 'usertags');
  }

  getUserTag(id: number): Observable<UserTag> {
    return this.httpClient.get<UserTag>(this.baseUrl + 'usertags/' + id);
  }

  postUserTag(userTag: UserTag): Observable<UserTag> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<UserTag>(this.baseUrl + 'usertags', userTag, {
      headers: headers,
    });
  }

  putUserTag(id: number, userTag: UserTag): Observable<UserTag> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<UserTag>(
      this.baseUrl + 'usertags/' + id,
      userTag,
      { headers: headers }
    );
  }
}
