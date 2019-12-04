import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderSearchBarComponent } from './header-search-bar/header-search-bar.component';
import { MovieRowComponent } from './movie-row/movie-row.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchBarComponent,
    MovieRowComponent,
    MoviePosterComponent
  ],
  exports: [
    HeaderComponent,
    HeaderSearchBarComponent,
    MovieRowComponent,
    MoviePosterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule
  ]
})
export class ComponentsModule { }
