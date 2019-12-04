import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss']
})
export class SideListComponent implements OnInit {

  @Input() movieList: Array<{
    title: string,
    year: number,
    poster?: string,
    genres: string[]
  }> = [];

  @Input() header;

  constructor() { }

  ngOnInit() {
  }

}
