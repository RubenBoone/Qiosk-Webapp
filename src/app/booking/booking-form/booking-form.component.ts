import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/admin/users-table/company';
import { User } from 'src/app/admin/users-table/user';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // @Output() getUserData = new EventEmitter<{
  //   organisator: User;
  //   users: Array<Array<string>>;
  // }>();

  // companyObject: Company = { companyID: 0, name: '' };

  // UserData() {
  //   this.companyObject.name = this.company;

  //   this.getUserData.emit({
  //     organisator: {
  //       userID: 0,
  //       firstName: this.firstname,
  //       lastName: this.lastname,
  //       email: this.email,
  //       isActive: true,
  //       isAdmin: false,
  //       companyID: 0,
  //       company: this.companyObject,
  //       password: this.password,
  //     },
  //     users: this.extraUsers,
  //   });
  // }

  // onSubmit() {
  //   this.UserData();
  // }

  // ngOnInit(): void {}
}
