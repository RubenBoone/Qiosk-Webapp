import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageApp } from 'src/app/shared/datatables/languages';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  users: User[] = [];
  users$: Subscription = new Subscription();
  deleteUser$: Subscription = new Subscription();
  postUser$: Subscription = new Subscription();
  putUser$: Subscription = new Subscription();

  // Extra
  dtOptions: DataTables.Settings = {};

  user: User = {userID: 0, firstName: "", lastName: "", email: "", isActive: false, isAdmin: false, companyID: 0, company:{ companyID :0,name: ""}}

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.dtOptions = {language: LanguageApp.dutch_datatables};
    this.getUsers();
  }
  add() {
    this.router.navigate(['admin/articles/form'], {state: {mode: "add"}});
  }

  getUsers() {
    this.users$ = this.userService.getUsers().subscribe(result => {
      this.users = result;
    })
  }
}
