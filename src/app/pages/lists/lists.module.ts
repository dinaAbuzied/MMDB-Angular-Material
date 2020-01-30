import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists.component';


const routes: Routes = [{
  path: '',
  component: ListsComponent
}];

@NgModule({
  declarations: [ListsComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ListsModule { }
