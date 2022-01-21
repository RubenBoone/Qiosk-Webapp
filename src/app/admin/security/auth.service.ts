import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import {UserResponse} from './userResponse';
import { GlobalConstants } from 'src/app/shared/global-constants';
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
      return { userID: parseInt(localStorage.getItem('userID') ?? '0') ,
        email: localStorage.getItem('email') ?? '',
        password: '',
        isActive:localStorage.getItem('isActive')=='true',
        isAdmin:localStorage.getItem('isAdmin')=='true',
        token: this.getToken()  };
    } else {
      return null;
    }
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    localStorage.removeItem('role')
  }


  login(result:UserResponse){
    // save access token localstorage
    localStorage.setItem('token', result.token);
    localStorage.setItem('userID', result.userID.toString());
    localStorage.setItem('email', result.email);
    result.isAdmin?localStorage.setItem('role','admin'):''
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(email: string,password:string): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(GlobalConstants.apiURL+'Users/authenticate', {email, password});
  }

}
