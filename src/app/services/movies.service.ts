import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, defaultIfEmpty } from 'rxjs/operators';
import {
  MovieListUnformatted, MovieDetailsUnformatted,
  MovieVideosUnformatted, MovieCreditsUnformatted, LocalMovie, Genre
} from '../interfaces/movies.interface';
import { DataFormatterService } from './data-formatter.service';
import { forkJoin } from 'rxjs';
import { LocalMoviesService } from './local-movies.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private currentGenres: Genre[];

  public get genres(): Genre[] {
    return this.currentGenres;
  }

  constructor(private http: HttpClient,
              private dt: DataFormatterService,
              private lm: LocalMoviesService,
              private auth: AuthenticationService) {
                this.getGenres().subscribe(data => this.currentGenres = data.genres);
              }

  // TODO: add error handling function
  getGenres() {
    return this.http.get<{genres: Genre[]}>('api/genres');
  }

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

  getMovieDetails(id: number) {
    return forkJoin([
      this.http.get<MovieDetailsUnformatted>(`api/movieDetails/${id}`),
      this.http.get<MovieVideosUnformatted>(`api/movieVideos/${id}`)
    ]).pipe(map(data => {
      return this.dt.formatMovieDetails(data[0], data[1]);
    }));
  }

  getMovieCredits(id: number) {
    return this.http.get<MovieCreditsUnformatted>(`api/movieCredits/${id}`)
      .pipe(map(data => {
        return this.dt.formatMovieCredits(data);
      }));
  }

  getListDetails(list: string) {
    this.lm.setLocalMovies(this.auth.currentUser);
    const localList: LocalMovie[] = this.lm.getUserList(list);
    return forkJoin(
      localList.map(movie => this.http.get<MovieDetailsUnformatted>(`api/movieDetails/${movie.id}`))
    ).pipe(map(data => {
      return this.dt.formatMovieShortDetails(data);
    }), defaultIfEmpty([]));
  }

  getSerachResault(phrase: string) {
    return forkJoin([
      this.http.get<MovieListUnformatted>('api/nowPlaying'),
      this.http.get<MovieListUnformatted>('api/upComing')
    ]).pipe(map(data => {
      return this.dt.formatSearchResualts([...data[0].results.filter(movie => movie.title.toLowerCase().includes(phrase.toLowerCase())),
      ...data[1].results.filter(movie => movie.title.toLowerCase().includes(phrase.toLowerCase()))],
    this.currentGenres);
    }), defaultIfEmpty([]));
  }
}
