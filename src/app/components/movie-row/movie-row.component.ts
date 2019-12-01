import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.scss']
})
export class MovieRowComponent implements OnInit {
  @Input() movie;

  constructor() { }

  ngOnInit() {
  }

}
