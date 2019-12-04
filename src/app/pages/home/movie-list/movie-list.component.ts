import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movieList: Array<{
    title: string,
    poster?: string,
    fav?: boolean,
    later?: boolean,
    list?: boolean,
    own?: boolean
  }> = [];

  @Input() title: string;

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
