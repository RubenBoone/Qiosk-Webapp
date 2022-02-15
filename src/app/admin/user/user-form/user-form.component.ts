import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EncryptionService } from '../../security/encryption.service';
import { CompanyService } from '../company.service';
import { UserService } from '../user.service';
import { Company } from '../users-table/company';
import { User } from '../users-table/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  userID: number = 0;
  companys: Company[] = []

  user: User = {userID: 0, firstName: "", lastName: "", email: "", password: "", isActive: true, isAdmin: false, companyID: 0, company:{ companyID :0, name: ""}}
  isSubmitted: boolean = false;
  errorMessage: string = "";

  companys$: Subscription = new Subscription();
  user$: Subscription = new Subscription();
  postUser$: Subscription = new Subscription();
  putUser$: Subscription = new Subscription();

  constructor(private router: Router, private userService: UserService, private companyService: CompanyService, private encryptionService: EncryptionService,
    ) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.userID = +this.router.getCurrentNavigation()?.extras.state?.id;


    if (this.userID != null && this.userID > 0) {
      this.user$ = this.userService.getUserById(this.userID).subscribe(result => this.user = result);
    }
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  ngOnDestroy(): void {
    this.companys$.unsubscribe();
    this.user$.unsubscribe();
    this.postUser$.unsubscribe();
    this.putUser$.unsubscribe();
  }

  onSubmit(form: NgForm) {
    if (this.user.companyID!=0){

    this.isSubmitted = true;
    if (this.isAdd) {
      this.user.password = this.encryptionService.encrypt(this.user.password)

      this.postUser$ = this.userService.postUser(this.user).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/gebruikers");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putUser$ = this.userService.putUser(this.userID, this.user).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/gebruikers");
              },
              error => {
                this.errorMessage = error.message;
              });
    }}
  }

  getCompanies() {
    this.companys$ = this.companyService.getCompanies().subscribe(result => {
      this.companys = result;
    })
  }

  onChange(newValue: number) {
    this.user.companyID = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
}
}
