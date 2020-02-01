import { Pipe, PipeTransform } from '@angular/core';
import { MovieShortDetails } from '../interfaces/movies.interface';

@Pipe({
  name: 'moviesFilter'
})
export class MoviesFilterPipe implements PipeTransform {

  transform(movies: MovieShortDetails[], startYear: number, endYear: number, selectedGenres: string[]): any {
    return movies.filter(movie => {
      if (startYear && movie.year < startYear) {
        return false;
      }
      if (endYear && movie.year > endYear) {
        return false;
      }
      if (selectedGenres && selectedGenres.length > 0 &&
          selectedGenres.filter(genre => movie.genres.includes(genre)).length !== selectedGenres.length) {
        return false;
      }
      return true;
    });
  }

}
