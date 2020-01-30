import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [{
  path: '',
  component: SearchComponent
}];

@NgModule({
  declarations: [SearchComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule,
    MatDialogModule
  ]
})
export class SearchModule { }
