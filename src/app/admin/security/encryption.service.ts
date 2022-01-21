import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private lock :string = "tHIs_IS_0uR_w^Y_BR0, Just a whole RANDOM Text to HELp_Achieve WAT; W3 % Waùt , Too B^d TheRe) is S000 1iTT13 Tim3"

  constructor() { }
   encrypt( value:string){

    var key = CryptoJS.enc.Utf8.parse(this.lock);
    var iv = CryptoJS.enc.Utf8.parse(this.lock);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }
}
