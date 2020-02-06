import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderSearchBarComponent } from './header-search-bar/header-search-bar.component';
import { MovieRowComponent } from './movie-row/movie-row.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchBarComponent,
    MovieRowComponent,
    MoviePosterComponent,
    MovieDetailsComponent
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
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [MovieDetailsComponent]
})
export class ComponentsModule { }
