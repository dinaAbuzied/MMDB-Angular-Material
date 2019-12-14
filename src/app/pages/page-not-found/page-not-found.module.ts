import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

import { ComponentsModule } from '../../components/components.module';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [{
  path: '',
  component: PageNotFoundComponent
}];

@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule,
    MatButtonModule
  ]
})
export class PageNotFoundModule { }
