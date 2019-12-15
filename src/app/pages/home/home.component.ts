import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies.interface';

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

  constructor(public detailsDialog: MatDialog, private movies: MoviesService) {
    // this.nowPlaying = movieList.map(movie => {
    //   return {...movie};
    // });
    // this.comingSoon = movieList.map(movie => {
    //   return {...movie};
    // });
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

  showMovieDetails(id: number) {
    const dialogRef = this.detailsDialog.open(MovieDetailsComponent, {
      data: {id},
      panelClass: 'movie-details-dialog',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

const movieList: Array<{
  id: number,
  title: string,
  poster?: string,
  fav?: boolean,
  later?: boolean,
  list?: boolean,
  own?: boolean
}> = [{
  id: 1,
  title: 'Knives Out',
  poster: 'https://image.tmdb.org/t/p/w342/pThyQovXQrw2m0s9x82twj48Jq4.jpg',
  later: true
}, {
  id: 2,
  title: 'Stay Out Stay Alive'
}, {
  id: 3,
  title: 'Never Surrender: A Galaxy Quest Documentary',
  poster: 'https://image.tmdb.org/t/p/w342/40Tje7U3S6LwNL2KRothPEmgw7H.jpg',
  fav: true
}, {
  id: 1,
  title: 'The Courier',
  poster: 'https://image.tmdb.org/t/p/w342/ApZ6eymKwLJJnwxb9JskYRdjq7j.jpg',
  list: true,
}, {
  id: 1,
  title: 'A Beautiful Day in the Neighborhood',
  poster: 'https://image.tmdb.org/t/p/w342/hoydgw429fYlYIGrPIjAdpftL8z.jpg',
  own: true
}, {
  id: 1,
  title: 'Knives Out',
  poster: 'https://image.tmdb.org/t/p/w342/pThyQovXQrw2m0s9x82twj48Jq4.jpg',
  later: true
}, {
  id: 1,
  title: 'Stay Out Stay Alive'
}, {
  id: 1,
  title: 'Never Surrender: A Galaxy Quest Documentary',
  poster: 'https://image.tmdb.org/t/p/w342/40Tje7U3S6LwNL2KRothPEmgw7H.jpg',
  fav: true
}, {
  id: 1,
  title: 'The Courier',
  poster: 'https://image.tmdb.org/t/p/w342/ApZ6eymKwLJJnwxb9JskYRdjq7j.jpg',
  list: true,
}, {
  id: 1,
  title: 'A Beautiful Day in the Neighborhood',
  poster: 'https://image.tmdb.org/t/p/w342/hoydgw429fYlYIGrPIjAdpftL8z.jpg',
  own: true
}];

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
