import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/admin/user/users-table/company';
import { User } from 'src/app/admin/user/users-table/user';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit {
  constructor() {}

  @Input() company: string = '';
  @Input() email: string = '';
  @Input() firstname: string = '';
  @Input() lastname: string = '';
  @Input() password: string = '';
  @Input() extraEmail: string = '';
  @Input() extraFirstName: string = '';
  @Input() extraLastName: string = '';

  @Input() extraUsers: Array<Array<any>> = [];

  @Input() addExtraUser() {
    this.extraUsers.push([
      this.extraFirstName,
      this.extraLastName,
      this.extraEmail,
    ]);

    this.extraEmail = '';
    this.extraFirstName = '';
    this.extraLastName = '';
  }

  @Input() deleteExtraUser(msg: string) {
    let index = 0;
    this.extraUsers.forEach((element) => {
      if (element[0] == msg) {
        index = this.extraUsers.indexOf(element);
      }
    });

    this.extraUsers.splice(index, 1);
  }

  @Output() getUserData = new EventEmitter<{
    organisator: User;
    users: Array<Array<string>>;
  }>();

  companyObject: Company = { companyID: 0, name: '' };

  UserData() {
    this.companyObject.name = this.company;

    this.getUserData.emit({
      organisator: {
        userID: 0,
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        isActive: true,
        isAdmin: false,
        companyID: 0,
        company: this.companyObject,
        password: this.password,
      },
      users: this.extraUsers,
    });
  }

  onSubmit() {
    this.UserData();
  }

  createRange(number: number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  ngOnInit(): void {}
}