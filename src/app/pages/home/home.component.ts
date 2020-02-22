import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieShortDetails } from '../../interfaces/movies.interface';
import { LocalMoviesService } from '../../services/local-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nowPlaying: Movie[];
  nowPlayingState = 'loading';
  comingSoon: Movie[];
  comingSoonState = 'loading';
  watchLaterData: MovieShortDetails[] = [];
  watchLaterState = 'loading';
  watchLaterHeader;
  wishListData: MovieShortDetails[] = [];
  wishListState = 'loading';
  wishListHeader;

  constructor(public detailsDialog: MatDialog,
              private movies: MoviesService,
              private lm: LocalMoviesService) {
    this.watchLaterHeader = {
      title: 'Watch Later',
      icon: 'remove_red_eye',
      class: 'later'
    };
    this.wishListHeader = {
      title: 'Wish List',
      icon: 'card_giftcard',
      class: 'list'
    };
  }

  ngOnInit() {
    this.movies.getNowPlaying().subscribe(data => {
      this.nowPlaying = data;
      this.nowPlayingState = 'complete';
    });
    this.movies.getUpComing().subscribe(data => {
      this.comingSoon = data;
      this.comingSoonState = 'complete';
    });
    this.movies.getListDetails('later').subscribe(data => {
      this.watchLaterData = data.length > 5 ? data.reverse().slice(0, 5) : data.reverse();
      this.watchLaterState = 'complete';
    });
    this.movies.getListDetails('wish').subscribe(data => {
      this.wishListData = data.length > 5 ? data.reverse().slice(0, 5) : data.reverse();
      this.wishListState = 'complete';
    });
  }

  updateMovieList({movieID, list}) {
    this.lm.updateLocalMovies(movieID, list);
    this.nowPlaying = this.lm.updateMovies(this.nowPlaying, movieID, list);
    this.comingSoon = this.lm.updateMovies(this.comingSoon, movieID, list);
    this.movies.getListDetails('later').subscribe(data => {
      this.watchLaterData = data.length > 5 ? data.reverse().slice(0, 5) : data.reverse();
    });
    this.movies.getListDetails('wish').subscribe(data => {
      this.wishListData = data.length > 5 ? data.reverse().slice(0, 5) : data.reverse();
    });
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
