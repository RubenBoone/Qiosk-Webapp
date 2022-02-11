import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { LanguageApp } from 'src/app/shared/datatables/languages';
import { TaguserService } from '../taguser.service';
import { UserTag } from './taguser';

@Component({
  selector: 'app-taguser-table',
  templateUrl: './taguser-table.component.html',
  styleUrls: ['./taguser-table.component.scss'],
})
export class TaguserTableComponent implements OnInit {
    // font awesome icons
    faSort=faSort


  tagUsers: UserTag[] = [];
  tagUsers$: Subscription = new Subscription();

  // Extra
  dtOptions: DataTables.Settings = {};

  errorMessage: string = '';

  constructor(private router: Router, private taguserService: TaguserService) {}

  ngOnInit(): void {
    this.dtOptions = { language: LanguageApp.dutch_datatables };
    this.getUserTags();
  }

  ngOnDestroy(): void {
    this.tagUsers$.unsubscribe();
  }

  add() {
    this.router.navigate(['admin/tagusers/form'], {
      state: { mode: 'add' },
    });
  }
  edit(id: number) {
    this.router.navigate(['admin/tagusers/form'], {
      state: { id: id, mode: 'edit' },
    });
  }

  getUserTags() {
    this.tagUsers$ = this.taguserService.getUserTags().subscribe((result) => {
      this.tagUsers = result;
    });
  }
}
