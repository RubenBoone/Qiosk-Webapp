import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';
import { TaguserTableComponent } from './taguser-table/taguser-table.component';

const routes: Routes = [
  { path: '', component: TaguserTableComponent ,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaguserRoutingModule {}
