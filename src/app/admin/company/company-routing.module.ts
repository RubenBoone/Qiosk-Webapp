import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyTableComponent } from './company-table/company-table.component';

const routes: Routes = [
    { path: '', component: CompanyTableComponent },
    { path: 'form', component: CompanyFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}