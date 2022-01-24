import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersTableComponent } from './users-table.component';



@NgModule({
  declarations: [UsersTableComponent],
  imports: [
    SharedModule
  ],exports:[UsersTableComponent]
})
export class UsersTableModule { }
