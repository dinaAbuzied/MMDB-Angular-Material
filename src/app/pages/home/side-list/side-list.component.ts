import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieShortDetails } from '../../../interfaces/movies.interface';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss']
})
export class SideListComponent implements OnInit {
  @Output() selectMovie: EventEmitter<number> = new EventEmitter();

  @Input() movieList: MovieShortDetails[] = [];

  @Input() header;

  constructor() { }

  ngOnInit() { }

  onSelectMovie(id: number) {
    this.selectMovie.emit(id);
  }

}
