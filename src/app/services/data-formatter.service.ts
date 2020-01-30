import { Injectable } from '@angular/core';
import { MovieListUnformatted, Movie,
        LocalMovie, MovieDetailsUnformatted,
        MovieVideosUnformatted, MovieDetails,
        MovieCreditsUnformatted, MovieCredits,
        MovieShortDetails, MovieShortDetailsUnformatted,
        Genre} from '../interfaces/movies.interface';
import { LocalMoviesService } from './local-movies.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataFormatterService {
  largePoster = 'https://image.tmdb.org/t/p/w342/';
  detailsPoster = 'https://image.tmdb.org/t/p/w154/';
  profilePoster = 'https://image.tmdb.org/t/p/w92';

  constructor(private lm: LocalMoviesService,
              private auth: AuthenticationService) { }

  formatMovieList(list: MovieListUnformatted): Movie[] {
    this.lm.setLocalMovies(this.auth.currentUser);
    const localMovies: LocalMovie[] = this.lm.localMovies;
    let results = [...list.results];
    results.sort((a, b) => b.popularity - a.popularity);
    results = results.slice(0, 10);
    results.sort((a, b) => {
      return new Date(b.release_date).valueOf() - new Date(a.release_date).valueOf();
    });
    return results.map(movie => {
      const moviesArr: LocalMovie[] = localMovies.filter(lmovie => movie.id === lmovie.id);
      return {
        poster: movie.poster_path ? this.largePoster + movie.poster_path : movie.poster_path,
        id: movie.id,
        title: movie.title,
        lists: moviesArr.length > 0 ? [...moviesArr[0].lists] : []
      };
    });
  }

  formatMovieDetails(details: MovieDetailsUnformatted, videos: MovieVideosUnformatted): MovieDetails {
    this.lm.setLocalMovies(this.auth.currentUser);
    const moviesArr: LocalMovie[] = this.lm.localMovies.filter(lmovie => details.id === lmovie.id);
    const date = new Date(details.release_date);
    const releaseDate = {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'long' }),
      year: date.getFullYear()
    };
    const hrs = Math.floor(details.runtime / 60);
    const mins = details.runtime % 60;
    return {
      id: details.id,
      title: details.title,
      release_date: releaseDate,
      runtime: `${hrs}h ${mins}min`,
      production_countries: details.production_countries,
      imdb_id: details.imdb_id,
      poster: details.poster_path ? this.detailsPoster + details.poster_path : details.poster_path,
      overview: details.overview,
      genres: details.genres.map(genre => genre.name),
      trailer: videos.results && videos.results.length > 0 ? videos.results[0].key : false,
      lists: moviesArr.length > 0 ? [...moviesArr[0].lists] : []
    };
  }

  formatMovieCredits(credits: MovieCreditsUnformatted): MovieCredits {
    return {
      directors: credits.crew.filter(person => person.job === 'Director').map(person => {
        return {
          name: person.name,
          profile_path: person.profile_path ? this.profilePoster + person.profile_path : person.profile_path
        };
      }),
      writers: credits.crew.filter(person => person.department === 'Writing').map(person => {
        return {
          name: person.name,
          profile_path: person.profile_path ? this.profilePoster + person.profile_path : person.profile_path,
          job: person.job
        };
      }),
      cast: credits.cast.slice(0, 6).map(person => {
        return {
          name: person.name,
          profile_path: person.profile_path ? this.profilePoster + person.profile_path : person.profile_path,
          role: person.character
        };
      })
    };
  }

  formatMovieShortDetails(detailsList: MovieDetailsUnformatted[]): MovieShortDetails[] {
    this.lm.setLocalMovies(this.auth.currentUser);
    return detailsList.map(details => {
      const moviesArr: LocalMovie[] = this.lm.localMovies.filter(lmovie => details.id === lmovie.id);
      return {
        id: details.id,
        title: details.title,
        year: new Date(details.release_date).getFullYear(),
        poster: details.poster_path ? this.detailsPoster + details.poster_path : details.poster_path,
        genres: details.genres.map(genre => genre.name),
        lists: moviesArr.length > 0 ? [...moviesArr[0].lists] : []
      };
    });
  }

  formatSearchResualts(detailsList: MovieShortDetailsUnformatted[], genres: Genre[], addLists: boolean = false): MovieShortDetails[] {
    if (addLists) {
      this.lm.setLocalMovies(this.auth.currentUser);
    }
    return detailsList.map(details => {
      let moviesArr: LocalMovie[] = [];
      if (addLists) {
        moviesArr = this.lm.localMovies.filter(lmovie => details.id === lmovie.id);
      }
      return {
        id: details.id,
        title: details.title,
        year: new Date(details.release_date).getFullYear(),
        poster: details.poster_path ? this.detailsPoster + details.poster_path : details.poster_path,
        genres: details.genre_ids.map(genre => genres.filter(i => genre === i.id)[0].name),
        lists: moviesArr.length > 0 ? [...moviesArr[0].lists] : []
      };
    });
  }
}
