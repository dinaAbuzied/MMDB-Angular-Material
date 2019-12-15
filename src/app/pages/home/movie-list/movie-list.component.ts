import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Output() selectMovie: EventEmitter<number> = new EventEmitter();

  @Input() movieList: Array<{
    id: number,
    title: string,
    poster?: string,
    fav?: boolean,
    later?: boolean,
    list?: boolean,
    own?: boolean
  }> = [];

  @Input() title: string;

  currentMovieList: Array<{
    id: number,
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
    console.log(this.movieList, this.title);
    this.currentMovieList = this.movieList.slice(0, 5);
  }

  toggleExpandedList() {
    this.listExpanded = !this.listExpanded;

    this.currentMovieList = this.listExpanded ? [...this.movieList] : this.movieList.slice(0, 5);
  }

  toggleUserList(list: string, movie) {
    movie[list] = !movie[list];
  }

  onSelectMovie(id: number) {
    this.selectMovie.emit(id);
  }

}
