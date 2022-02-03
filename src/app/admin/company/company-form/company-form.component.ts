import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company } from '../../user/users-table/company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  companyID: number = 0;

  company: Company = { companyID: 0, name: "" };

  isSubmitted: boolean = false;
  errorMessage: string = "";

  company$: Subscription = new Subscription();
  postCompany$: Subscription = new Subscription();
  putCompany$: Subscription = new Subscription();

  constructor(private router: Router, private companyService: CompanyService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.companyID = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.companyID != null && this.companyID > 0) {
      this.company$ = this.companyService.getCompany(this.companyID).subscribe(result => this.company = result);
    }

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.company$.unsubscribe();
    this.postCompany$.unsubscribe();
    this.putCompany$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postCompany$ = this.companyService.postCompany(this.company).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/bedrijven");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putCompany$ = this.companyService.putCompany(this.companyID, this.company).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/bedrijven");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }
}
