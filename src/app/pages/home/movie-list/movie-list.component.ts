import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: Array<{
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

  currentMovieList: Array<{
    title: string,
    poster?: string,
    fav?: boolean,
    later?: boolean,
    list?: boolean,
    own?: boolean
  }>;

  listExpanded: boolean;

  constructor() { }

  ngOnInit() {
    this.currentMovieList = this.movieList.slice(0, 5);
  }

  toggleExpandedList() {
    this.listExpanded = !this.listExpanded;

    this.currentMovieList = this.listExpanded ? [...this.movieList] : this.movieList.slice(0, 5);
  }

}
