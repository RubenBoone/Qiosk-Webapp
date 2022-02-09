import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaguserFormComponent } from './taguser-form/taguser-form.component';
import { TaguserTableComponent } from './taguser-table/taguser-table.component';

const routes: Routes = [
  { path: '', component: TaguserTableComponent },
  { path: 'form', component: TaguserFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaguserRoutingModule {}
