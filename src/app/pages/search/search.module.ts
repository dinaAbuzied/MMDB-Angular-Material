import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = [{
  path: '',
  component: SearchComponent
}];

@NgModule({
  declarations: [SearchComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SearchModule { }
