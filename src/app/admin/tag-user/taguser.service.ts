import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';
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
}
