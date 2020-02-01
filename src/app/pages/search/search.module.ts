import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ComponentsModule } from '../../components/components.module';
import { MoviesFilterPipe } from '../../pipes/movies-filter.pipe';

const routes: Routes = [{
  path: '',
  component: SearchComponent
}];

@NgModule({
  declarations: [SearchComponent, MoviesFilterPipe],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    ComponentsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class SearchModule { }
