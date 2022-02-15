import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageApp } from 'src/app/shared/datatables/languages';
import { User } from './user';
import { UserService } from '../user.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit, OnDestroy {

  // font awesome icons
  faSort=faSort

  users: User[] = [];
  users$: Subscription = new Subscription();
  deleteUser$: Subscription = new Subscription();
  postUser$: Subscription = new Subscription();
  putUser$: Subscription = new Subscription();

  // Extra
  dtOptions: DataTables.Settings = {};

  user: User = {userID: 0, firstName: "", lastName: "", email: "", password: "", isActive: false, isAdmin: false, companyID: 0, company:{ companyID :0,name: ""}}
  errorMessage: string = '';
  loading$ = this.loader.loading$

  constructor(private loader: LoadingService,private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.loader.show();
    this.dtOptions = {
      language: LanguageApp.dutch_datatables
    };
    this.getUsers();
    this.loader.hide();
  }
  ngOnDestroy(): void {
    this.users$.unsubscribe();
    this.postUser$.unsubscribe();
    this.putUser$.unsubscribe();
    this.deleteUser$.unsubscribe();
  }

  add() {
    this.router.navigate(['admin/gebruikers/form'], {state: {mode: "add"}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['admin/gebruikers/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteUser$ = this.userService.deleteUser(id).subscribe(result => {
      //all went well
      this.getUsers();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getUsers() {
    this.users$ = this.userService.getUsers().subscribe(result => {
      this.users = result;
    })
  }
}
