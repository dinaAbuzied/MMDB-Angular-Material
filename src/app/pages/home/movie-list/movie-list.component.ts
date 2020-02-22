import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movies.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Output() selectMovie: EventEmitter<number> = new EventEmitter();
  @Output() updateList: EventEmitter<{ movieID: number, list: string }> = new EventEmitter();
  @Input() title: string;
  @Input() state = 'loading';
  private totalList: Movie[] = [];

  @Input('movieList')
  public set movieList(v: Movie[]) {
    if (v) {
      this.totalList = v;
      this.currentMovieList = this.listExpanded ? [...this.totalList] : this.totalList.slice(0, 5);
    }
  }

  currentMovieList: Movie[] = [];
  listsConfig;
  listExpanded: boolean;

  constructor() { }

  ngOnInit() {
    // this.currentMovieList = this.movieList.slice(0, 5);
    this.listsConfig = [{
      type: 'fav',
      icon: 'favorite',
      title: 'Favorites'
    }, {
      type: 'later',
      icon: 'remove_red_eye',
      title: 'Watch Later'
    }, {
      type: 'wish',
      icon: 'card_giftcard',
      title: 'Wish List'
    }, {
      type: 'own',
      icon: 'inbox',
      title: 'Own it'
    }];
  }

  toggleExpandedList() {
    this.listExpanded = !this.listExpanded;

    this.currentMovieList = this.listExpanded ? [...this.totalList] : this.totalList.slice(0, 5);
  }

  toggleUserList(list: string, movieID: number) {
    this.updateList.emit({ movieID, list });
  }

  isActive(movie: Movie, list: string) {
    return movie.lists.includes(list);
  }

  onSelectMovie(id: number) {
    this.selectMovie.emit(id);
  }

}
