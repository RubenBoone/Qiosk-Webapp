import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import {UserResponse} from './userResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  getUser(): User | null {
    if (this.isLoggedIn()){
      return { id : parseInt(localStorage.getItem('id') ?? '0') ,
        email: localStorage.getItem('email') ?? '', password: '',
        isActive:localStorage.getItem('isActive')=='true',
        isAdmin:localStorage.getItem('isAdmin')=='true',
        token: this.getToken()  };
    } else {
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('role')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(email: string,password:string, firstName:string): Observable<UserResponse> {
    //return this.httpClient.post<UserResponse>(GlobalConstants.apiURL+'api/Users/authenticate', {email, password, firstName});
  }

}
