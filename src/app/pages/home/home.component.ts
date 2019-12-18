import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies.interface';
import { LocalMoviesService } from '../../services/local-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nowPlaying: Movie[];
  comingSoon: Movie[];
  watchLaterData;
  watchLaterHeader;
  wishListData;
  wishListHeader;

  constructor(public detailsDialog: MatDialog,
              private movies: MoviesService,
              private lm: LocalMoviesService) {
    this.watchLaterData = sideMovieList.map(movie => {
      return {...movie};
    });
    this.wishListData = sideMovieList.map(movie => {
      return {...movie};
    });
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
    });
    this.movies.getUpComing().subscribe(data => {
      this.comingSoon = data;
    });
  }

  updateMovieList({movieID, list}) {
    this.lm.updateLocalMovies(movieID, list);
    this.nowPlaying = this.lm.updateMovies(this.nowPlaying, movieID, list);
    this.comingSoon = this.lm.updateMovies(this.comingSoon, movieID, list);
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

const sideMovieList: Array<{
  id: number,
  title: string,
  year: number,
  poster?: string,
  genres: string[]
}> = [{
  id: 1,
  title: 'Mission: Impossible - Fallout',
  year: 2018,
  poster: 'https://image.tmdb.org/t/p/w154/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
  genres: ['Action', 'Adventure']
}, {
  id: 1,
  title: 'Mission: Impossible',
  year: 1996,
  poster: 'https://image.tmdb.org/t/p/w154/1PVKS17pIBFsIhgFws2uagPDNLW.jpg',
  genres: ['Action', 'Adventure', 'Thriller']
}, {
  id: 1,
  title: 'Mission: Impossible - Ghost Protocol',
  year: 2011,
  poster: 'https://image.tmdb.org/t/p/w154/s58mMsgIVOFfoXPtwPWJ3hDYpXf.jpg',
  genres: ['Action', 'Adventure', 'Thriller']
}, {
  id: 1,
  title: 'Mission: Impossible - Rogue Nation',
  year: 2015,
  poster: 'https://image.tmdb.org/t/p/w154/z2sJd1OvAGZLxgjBdSnQoLCfn3M.jpg',
  genres: ['Action', 'Adventure']
}, {
  id: 1,
  title: 'Mission: Impossible III',
  year: 2006,
  genres: ['Action', 'Adventure', 'Thriller']
}];
