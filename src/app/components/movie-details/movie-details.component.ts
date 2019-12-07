import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, AfterViewInit {
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
    imdb: 'tt8688634',
    date: ' 24 October 2019',
    time: '1h 39min',
    poster: 'https://image.tmdb.org/t/p/w154/8lSuziVF8TChwOczftjbxhpuu09.jpg',
    details: 'A disgraced NYPD detective after being thrust into a citywide manhunt for a cop killer, is given a shot at redemption.',
    genres: ['crime', 'action', 'thriller', 'drama'],
    credit: {
      directors: [{
        name: 'Brian Kirk',
        profile_path: 'https://image.tmdb.org/t/p/w185/frC0pXqBMe0ANwwYvFtntuOxvpV.jpg'
      }],
      writers: [{
        name: 'Adam Mervis',
        job: 'story'
      }, {
        name: 'Adam Mervis',
        job: 'screenplay'
      }, {
        name: 'Matthew Michael Carnahan',
        job: 'screenplay',
        profile_path: 'https://image.tmdb.org/t/p/w185/dYz8cZsNdgWLW8kA2dQff0cXxnr.jpg'
      }],
      cast: [{
        name: 'Chadwick Boseman',
        role: 'Andre Davis',
        profile_path: 'https://image.tmdb.org/t/p/w185/1lz1wLOuPFSRIratMz0SxD3tkJ.jpg'
      }, {
        name: 'Stephan James',
        role: 'Michael',
        profile_path: 'https://image.tmdb.org/t/p/w185/i3dx4BvgRh4maR03R4rdsgGexlV.jpg'
      }, {
        name: 'Sienna Miller',
        role: 'Frankie Burns',
        profile_path: 'https://image.tmdb.org/t/p/w185/4LqVTede09s7Dfb7LnK6qzsh4pD.jpg'
      }, {
        name: 'Taylor Kitsch',
        role: 'Ray',
        profile_path: 'https://image.tmdb.org/t/p/w185/pSl4peDN0veZx89ClhFXKSIOQJH.jpg'
      }, {
        name: 'J.K. Simmons',
        role: 'Captain McKenna',
        profile_path: 'https://image.tmdb.org/t/p/w185/jPoNW5fugs5h8AbcE7H5OBm04Tm.jpg'
      }, {
        name: 'Jamie Neumann',
        role: 'Leigh'
      }]
    },
    fav: false,
    later: true,
    list: false,
    own: false
  };
  imdbLogo = 'http://g-ecx.images-amazon.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png';

  constructor(public dialogRef: MatDialogRef<MovieDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

  ngAfterViewInit() {
    this.callIMDB(document, 'script', 'imdb-rating-api');
  }

  toggleUserList(list: string, movie) {
    movie[list] = !movie[list];
  }

    callIMDB(d, s: string, id: string) {
      const oldScripts = [...d.getElementsByTagName(s)].filter(script => script.id.includes('imdb'));
      oldScripts.map(script => {
        script.parentNode.removeChild(script);
      });
      const stags = d.getElementsByTagName(s)[0];
      const js = d.createElement(s);
      js.id = id;
      js.src = 'http://g-ec2.images-amazon.com/images/G/01/imdb/plugins/rating/js/rating.min.js';
      stags.parentNode.insertBefore(js, stags);
  }

  close(): void {
    this.dialogRef.close();
  }

}
