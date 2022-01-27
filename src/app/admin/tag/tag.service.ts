import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { Tag } from './tag-table/tag';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  baseUrl = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  getTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(this.baseUrl + 'tags');
  }

  getTag(id: number): Observable<Tag> {
    return this.httpClient.get<Tag>(this.baseUrl + 'tags/' + id);
  }

  postTag(tag: Tag): Observable<Tag> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Tag>(this.baseUrl + '/tags', tag, {
      headers: headers,
    });
  }

  putTag(id: number, tag: Tag): Observable<Tag> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Tag>(this.baseUrl + 'tags/' + id, tag, {
      headers: headers,
    });
  }

  deleteTag(id: number): Observable<Tag> {
    return this.httpClient.delete<Tag>(this.baseUrl + 'tags/' + id);
  }
}
