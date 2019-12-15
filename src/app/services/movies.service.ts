import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieListUnformatted } from '../interfaces/movies.interface';
import { DataFormatterService } from './data-formatter.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private dt: DataFormatterService) { }

  // TODO: add error handling function
  getNowPlaying() {
    return this.http.get<MovieListUnformatted>('api/nowPlaying')
                    .pipe(map(data => {
                      return this.dt.formatMovieList(data);
                    }));
  }

  getUpComing() {
    return this.http.get<MovieListUnformatted>('api/upComing')
                    .pipe(map(data => {
                      return this.dt.formatMovieList(data);
                    }));
  }

}
