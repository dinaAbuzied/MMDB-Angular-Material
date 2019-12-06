import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie = {
    title: '21 Bridges',
    year: 2019,
    production_countries: [{
      iso_3166_1: 'US',
      name: 'United States of America'
    }],
    trailer: {
      key: 'qaZoSTG10lw'
    },
    date: ' 24 October 2019',
    time: '1h 39min',
    poster: 'https://image.tmdb.org/t/p/w154/8lSuziVF8TChwOczftjbxhpuu09.jpg',
    details: 'A disgraced NYPD detective after being thrust into a citywide manhunt for a cop killer, is given a shot at redemption.'
  };

  constructor(public dialogRef: MatDialogRef<MovieDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

  close(): void {
    this.dialogRef.close();
  }

}
