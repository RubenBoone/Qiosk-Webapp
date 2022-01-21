import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SecurityComponent } from './security/security/security.component';

const routes: Routes = [
  {path: 'login', component: SecurityComponent},
  {path: 'logout', component: SecurityComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
