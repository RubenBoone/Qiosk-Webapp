import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../global-constants';
import { Mail } from './mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpRequest: HttpClient) { }
  sendMail(body: Mail) {
    return this.httpRequest.post(GlobalConstants.apiURL+"Mail/SendEmail/", body)
  }
}
