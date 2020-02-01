import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieShortDetails, Genre } from '../../interfaces/movies.interface';
import { MoviesService } from '../../services/movies.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { LocalMoviesService } from '../../services/local-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResults: Array<MovieShortDetails> = [];
  searchQuery: string;
  genres: Genre[] = [];
  selectedGenres: string[] = [];

  constructor(public detailsDialog: MatDialog,
              private lm: LocalMoviesService,
              private movies: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchQuery = this.route.snapshot.queryParams.query;
    if (this.searchQuery && this.searchQuery.length !== 0) {
      this.movies.getSearchResault(this.searchQuery, true).subscribe(data => {
        this.searchResults = data;
        console.log(this.searchResults);
      });
    }
    if (this.movies.genres) {
      this.genres = this.movies.genres;
    } else {
      this.movies.getGenres().subscribe(data => this.genres = data.genres);
    }
  }

  updateMovieList({movieID, list}) {
    this.lm.updateLocalMovies(movieID, list);
    this.searchResults = this.lm.updateMovies(this.searchResults, movieID, list);
  }

  toggleGenres(genre: string) {
    if (this.selectedGenres.includes(genre)) {
      this.selectedGenres = this.selectedGenres.filter(item => item !== genre);
    } else {
      this.selectedGenres = [...this.selectedGenres, genre];
    }
  }

  showMovieDetails(id: number) {
    const dialogRef = this.detailsDialog.open(MovieDetailsComponent, {
      data: { id },
      panelClass: 'movie-details-dialog',
      width: '600px'
    });

    dialogRef.componentInstance.updateList.subscribe(({movieID, list}) => {
      this.updateMovieList({movieID, list});
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
