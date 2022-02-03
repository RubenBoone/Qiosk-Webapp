import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageApp } from 'src/app/shared/datatables/languages';
import { Company } from '../../user/users-table/company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit, OnDestroy {
  companies: Company[] = [];
  companies$: Subscription = new Subscription();
  deleteCompany$: Subscription = new Subscription();
  postCompany$: Subscription = new Subscription();
  putCompany$: Subscription = new Subscription();

  // Extra
  dtOptions: DataTables.Settings = {};

  company: Company = {companyID: 0, name: ""};
  errorMessage: string = '';

  constructor(private router: Router, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.dtOptions = {language: LanguageApp.dutch_datatables};
    this.getCompanies();
  }

  ngOnDestroy(): void {
    this.companies$.unsubscribe();
    this.postCompany$.unsubscribe();
    this.putCompany$.unsubscribe();
    this.deleteCompany$.unsubscribe();
  }

  add() {
    this.router.navigate(['admin/bedrijven/form'], {state: {mode: "add"}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['admin/bedrijven/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteCompany$ = this.companyService.deleteCompany(id).subscribe(result => {
      //all went well
      this.getCompanies();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
    })
  }
}
