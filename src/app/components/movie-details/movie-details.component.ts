import { Component, OnInit, Inject, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails, MovieCredits } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, AfterViewInit {
  @Output() updateList: EventEmitter<{movieID: number, list: string}> = new EventEmitter();
  listsConfig = [];
  movie: MovieDetails;
  credit: MovieCredits;
  imdbLogo = 'http://g-ecx.images-amazon.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png';

  constructor(public dialogRef: MatDialogRef<MovieDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private ms: MoviesService) { }

  ngOnInit() {
    console.log(this.data);
  }

  ngAfterViewInit() {
    this.ms.getMovieDetails(this.data.id).subscribe(data => {
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

  showCredits() {
    if (this.credit === undefined) {
      this.ms.getMovieCredits(this.data.id).subscribe(data => {
        this.credit = data;
      });
    }
  }

  toggleUserList(list: string) {
    const movieID = this.data.id;
    this.updateList.emit({movieID, list});
    if (this.movie.lists.includes(list)) {
      this.movie.lists = this.movie.lists.filter(mlist => mlist !== list);
    } else {
      this.movie.lists.push(list);
    }
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
