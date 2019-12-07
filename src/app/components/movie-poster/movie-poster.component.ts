import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() title = 'No Image Available';
  @Input() posterURL;
  @Input() size = 'small';

  constructor() { }

  ngOnInit() {
  }

}
