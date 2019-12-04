import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss']
})
export class HeaderSearchBarComponent implements OnInit {
  @Output() selectMovie: EventEmitter<number> = new EventEmitter();

  searchPhrase = '';
  searchControl = new FormControl();
  searchResults: Array<{
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

  constructor() { }

  ngOnInit() {
  }

  onOptionSelected({ option }) {
    this.selectMovie.emit(option.value);
    setTimeout(() => {
      this.searchPhrase = '';
    }, 0);
  }
}
