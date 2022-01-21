import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SecurityComponent } from './security/security/security.component';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [
  {path: 'login', component: SecurityComponent},
  {path: 'logout', component: SecurityComponent},
  {path: 'users', component: UsersTableComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
