import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tag } from '../tag-table/tag';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss'],
})
export class TagFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  tagID: number = 0;

  tag: Tag = { tagID: 0, code: '' };

  isSubmitted: boolean = false;
  errorMessage: string = '';

  tag$: Subscription = new Subscription();
  postTag$: Subscription = new Subscription();
  putTag$: Subscription = new Subscription();

  constructor(private router: Router, private tagService: TagService) {
    this.isAdd =
      this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit =
      this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.tagID = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.tagID != null && this.tagID > 0) {
      this.tag$ = this.tagService
        .getTag(this.tagID)
        .subscribe((result) => (this.tag = result));
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.tag$.unsubscribe();
    this.postTag$.unsubscribe();
    this.putTag$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postTag$ = this.tagService.postTag(this.tag).subscribe(
        (result) => {
          //all went well
          this.router.navigateByUrl('/admin/tags');
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
    }
    if (this.isEdit) {
      this.putTag$ = this.tagService.putTag(this.tagID, this.tag).subscribe(
        (result) => {
          //all went well
          this.router.navigateByUrl('/admin/tags');
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
    }
  }
}
