import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecurityComponent } from './security/security/security.component';
import { TagFormComponent } from './tag/tag-form/tag-form.component';
import { TagTableComponent } from './tag/tag-table/tag-table.component';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [
  { path: 'login', component: SecurityComponent },
  { path: 'logout', component: SecurityComponent },
  { path: 'users', component: UsersTableComponent },
  { path: 'tags', component: TagTableComponent},
  { path: 'tags/form', component: TagFormComponent},
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
