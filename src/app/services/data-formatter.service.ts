import { Injectable } from '@angular/core';
import { MovieListUnformatted, Movie } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class DataFormatterService {
  largePoster = 'https://image.tmdb.org/t/p/w342/';

  constructor() { }

  // TODO: sort sliced list by data
  formatMovieList(list: MovieListUnformatted): Movie[] {
    let results = [...list.results];
    results.sort((a, b) => b.popularity - a.popularity);
    results = results.slice(0, 10);
    results.sort((a, b) => {
      return new Date(b.release_date).valueOf() - new Date(a.release_date).valueOf();
    });
    return results.map(movie => {
      return {
        poster: movie.poster_path ? this.largePoster + movie.poster_path : movie.poster_path,
        id: movie.id,
        title: movie.title
      };
    });
  }
}
