import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss']
})
export class HeaderSearchBarComponent implements OnInit {

  searchControl = new FormControl();
  searchResults: Array<{
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

  constructor() { }

  ngOnInit() {
  }

}
