import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EncryptionService } from '../encryption.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})
export class SecurityComponent implements OnInit {
  CE = localStorage.getItem('email');
  user: User = {
    userID: 0,
    email: this.CE != null ? this.CE : '',
    password: '',
    token: '',
    isActive: false,
    isAdmin: false,
  };

  isSubmitted: boolean = false;
  errorMessage: string = '';

  isLogin: boolean = false;
  isLogout: boolean = false;
  constructor(
    private authService: AuthService,
    private encryptionService: EncryptionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    switch (this.router.url) {
      case '/admin/login': {
        this.isLogin = true;
        break;
      }
      case '/admin/logout': {
        this.isLogout = true;
        this.authService.logout();
        this.router.navigate(['']);
        break;
      }
      default: {
        this.isLogin = true;
        break;
      }
    }
  }
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.isLogin) {
      this.authService
        .authenticate(
          this.user.email,
          this.encryptionService.encrypt(this.user.password)
        )
        .subscribe(
          (result) => {
            if(!result.isAdmin){
              this.errorMessage ='Verboden toegang! ... Neem contact op met de beheerder';
            this.isSubmitted = false;
            }else{
            this.errorMessage = '';
            this.authService.login(result);
            this.getUser();
            this.router.navigate(['/admin/dashboard']);
          }},
          (error) => {
            this.errorMessage =
              error.status == 0
                ? 'Slechte verbinding... probeer de pagina opnieuw te laden!'
                : 'Email of wachtwoord is onjuist!';
            this.isSubmitted = false;
          }
        );
    }
  }
  getUser() {
    let user = this.authService.getUser();
    if (user != null) {
      this.user = user;
    }
  }
}
