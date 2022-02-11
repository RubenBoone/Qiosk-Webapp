import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageApp } from 'src/app/shared/datatables/languages';
import { Tag } from './tag';
import { TagService } from '../tag.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tag-table',
  templateUrl: './tag-table.component.html',
  styleUrls: ['./tag-table.component.scss']
})
export class TagTableComponent implements OnInit, OnDestroy {
  // font awesome icons
  faSort=faSort


  tags: Tag[] = [];
  tags$: Subscription = new Subscription();
  deleteTag$: Subscription = new Subscription();
  postTag$: Subscription = new Subscription();
  putTag$: Subscription = new Subscription();

  // Extra
  dtOptions: DataTables.Settings = {};

  tag: Tag = {tagID: 0, code: ""};
  errorMessage: string = '';

  constructor(private router: Router, private tagService: TagService) { }

  ngOnInit(): void {
    this.dtOptions = {language: LanguageApp.dutch_datatables};
    this.getTags();
  }

  ngOnDestroy(): void {
    this.tags$.unsubscribe();
    this.postTag$.unsubscribe();
    this.putTag$.unsubscribe();
    this.deleteTag$.unsubscribe();
  }

  add() {
    this.router.navigate(['admin/tags/form'], {state: {mode: "add"}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['admin/tags/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteTag$ = this.tagService.deleteTag(id).subscribe(result => {
      //all went well
      this.getTags();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getTags() {
    this.tags$ = this.tagService.getTags().subscribe(result => {
      this.tags = result;
    })
  }
}
