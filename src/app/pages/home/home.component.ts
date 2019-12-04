import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nowPlaying;
  comingSoon;

  constructor() {
    this.nowPlaying = movieList.map(movie => {
      return {...movie};
    });
    this.comingSoon = movieList.map(movie => {
      return {...movie};
    });
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
