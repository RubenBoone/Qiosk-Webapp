import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tag } from '../../tag/tag-table/tag';
import { TagService } from '../../tag/tag.service';
import { UserService } from '../../user/user.service';
import { Company } from '../../user/users-table/company';
import { User } from '../../user/users-table/user';
import { UserTag } from '../taguser-table/taguser';
import { TaguserService } from '../taguser.service';

@Component({
  selector: 'app-taguser-form',
  templateUrl: './taguser-form.component.html',
  styleUrls: ['./taguser-form.component.scss'],
})
export class TaguserFormComponent implements OnInit {
  isAdd: boolean = false;
  isEdit: boolean = false;
  userTagID: number = 0;

  users: User[] = [];
  tags: Tag[] = [];

  company: Company = { companyID: 0, name: '' };
  tag: Tag = { tagID: 0, code: '' };
  user: User = {
    userID: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isActive: true,
    isAdmin: false,
    companyID: 0,
    company: this.company,
  };
  userTag: UserTag = {
    tagID: 0,
    userID: 0,
    userTagID: 0,
    tag: this.tag,
    user: this.user,
  };

  isSubmitted: boolean = false;
  errorMessage: string = '';

  userTag$: Subscription = new Subscription();
  postuserTag$: Subscription = new Subscription();
  putuserTag$: Subscription = new Subscription();

  tag$: Subscription = new Subscription();
  users$: Subscription = new Subscription();

  constructor(
    private router: Router,
    private userTagService: TaguserService,
    private tagService: TagService,
    private userService: UserService
  ) {
    this.isAdd =
      this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit =
      this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.userTagID = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.userTagID != null && this.userTagID > 0) {
      this.userTag$ = this.userTagService
        .getUserTag(this.userTagID)
        .subscribe((result) => (this.userTag = result));
    }
  }
  ngOnInit(): void {
    this.getUsers();
    this.getTags();
  }
  ngOnDestroy(): void {
    this.userTag$.unsubscribe();
  }

  getUsers() {
    this.users$ = this.userService.getUsers().subscribe((result) => {
      this.users = result;
    });
  }

  getTags() {
    this.tag$ = this.tagService.getTags().subscribe((result) => {
      this.tags = result;
    });
  }

  onChange(newValue: number) {
    this.userTag.userID = newValue; // don't forget to update the model here
    // ... do other stuff here ...
  }

  onChangeTag(newValue: number) {
    this.userTag.tagID = newValue; // don't forget to update the model here
    // ... do other stuff here ...
  }

  onSubmit(form: NgForm) {
    this.putuserTag$ = this.userTagService
      .putUserTag(this.userTagID, this.userTag)
      .subscribe((result) => {
        console.log('usertag Changed');
      });

    this.router.navigate(['admin/tagusers']);
  }
}
