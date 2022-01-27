import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagFormComponent } from './tag-form/tag-form.component';
import { TagTableComponent } from './tag-table/tag-table.component';

const routes: Routes = [
    { path: '', component: TagTableComponent },
    { path: 'form', component: TagFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagRoutingModule {}