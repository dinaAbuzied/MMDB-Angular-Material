import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, AfterViewInit {
  listsConfig = [];
  movie: MovieDetails;
  credit = {
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
  };
  imdbLogo = 'http://g-ecx.images-amazon.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png';

  constructor(public dialogRef: MatDialogRef<MovieDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private ms: MoviesService) { }

  ngOnInit() {
    console.log(this.data);
  }

  ngAfterViewInit() {
    // const { id } = this.data;
    this.ms.getMovieDetails(512200).subscribe(data => {
      console.log(data);
      this.movie = data;
      this.callIMDB(document, 'script', 'imdb-rating-api');
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
    });
  }

  toggleUserList(list: string) {
    // movie[list] = !movie[list];
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

  isActive(list: string) {
    return this.movie.lists.includes(list);
  }

  close(): void {
    this.dialogRef.close();
  }

}
