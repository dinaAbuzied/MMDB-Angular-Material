import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nowPlaying;
  comingSoon;
  watchLaterData;
  watchLaterHeader;
  wishListData;
  wishListHeader;

  constructor() {
    this.nowPlaying = movieList.map(movie => {
      return {...movie};
    });
    this.comingSoon = movieList.map(movie => {
      return {...movie};
    });
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
  }

}

const movieList: Array<{
  title: string,
  poster?: string,
  fav?: boolean,
  later?: boolean,
  list?: boolean,
  own?: boolean
}> = [{
  title: 'Knives Out',
  poster: 'https://image.tmdb.org/t/p/w342/pThyQovXQrw2m0s9x82twj48Jq4.jpg',
  later: true
}, {
  title: 'Stay Out Stay Alive'
}, {
  title: 'Never Surrender: A Galaxy Quest Documentary',
  poster: 'https://image.tmdb.org/t/p/w342/40Tje7U3S6LwNL2KRothPEmgw7H.jpg',
  fav: true
}, {
  title: 'The Courier',
  poster: 'https://image.tmdb.org/t/p/w342/ApZ6eymKwLJJnwxb9JskYRdjq7j.jpg',
  list: true,
}, {
  title: 'A Beautiful Day in the Neighborhood',
  poster: 'https://image.tmdb.org/t/p/w342/hoydgw429fYlYIGrPIjAdpftL8z.jpg',
  own: true
}, {
  title: 'Knives Out',
  poster: 'https://image.tmdb.org/t/p/w342/pThyQovXQrw2m0s9x82twj48Jq4.jpg',
  later: true
}, {
  title: 'Stay Out Stay Alive'
}, {
  title: 'Never Surrender: A Galaxy Quest Documentary',
  poster: 'https://image.tmdb.org/t/p/w342/40Tje7U3S6LwNL2KRothPEmgw7H.jpg',
  fav: true
}, {
  title: 'The Courier',
  poster: 'https://image.tmdb.org/t/p/w342/ApZ6eymKwLJJnwxb9JskYRdjq7j.jpg',
  list: true,
}, {
  title: 'A Beautiful Day in the Neighborhood',
  poster: 'https://image.tmdb.org/t/p/w342/hoydgw429fYlYIGrPIjAdpftL8z.jpg',
  own: true
}];

const sideMovieList: Array<{
  title: string,
  year: number,
  poster?: string,
  genres: string[]
}> = [{
  title: 'Mission: Impossible - Fallout',
  year: 2018,
  poster: 'https://image.tmdb.org/t/p/w154/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
  genres: ['Action', 'Adventure']
}, {
  title: 'Mission: Impossible',
  year: 1996,
  poster: 'https://image.tmdb.org/t/p/w154/1PVKS17pIBFsIhgFws2uagPDNLW.jpg',
  genres: ['Action', 'Adventure', 'Thriller']
}, {
  title: 'Mission: Impossible - Ghost Protocol',
  year: 2011,
  poster: 'https://image.tmdb.org/t/p/w154/s58mMsgIVOFfoXPtwPWJ3hDYpXf.jpg',
  genres: ['Action', 'Adventure', 'Thriller']
}, {
  title: 'Mission: Impossible - Rogue Nation',
  year: 2015,
  poster: 'https://image.tmdb.org/t/p/w154/z2sJd1OvAGZLxgjBdSnQoLCfn3M.jpg',
  genres: ['Action', 'Adventure']
}, {
  title: 'Mission: Impossible III',
  year: 2006,
  genres: ['Action', 'Adventure', 'Thriller']
}];
