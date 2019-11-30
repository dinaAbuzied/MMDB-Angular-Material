import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import { ComponentsModule } from '../../components/components.module';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  declarations: [HomeComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule
  ]
})
export class HomeModule { }
