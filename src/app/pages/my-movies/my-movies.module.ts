import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyMoviesComponent } from './my-movies.component';


const routes: Routes = [{
  path: '',
  component: MyMoviesComponent
}];

@NgModule({
  declarations: [MyMoviesComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MyMoviesModule { }
