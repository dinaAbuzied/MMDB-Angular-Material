import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { LocalMovie, Movie, MovieDetails } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalMoviesService {
  private movies: LocalMovie[];
  private userID: string;

  public get localMovies(): LocalMovie[] {
    return [...this.movies];
  }


  constructor() { }

  setLocalMovies(user: User) {
    this.userID = user.type === 'guest' ? this.userID = '$user-0' : this.userID = '$user-' + user.key;
    if (localStorage.getItem(this.userID)) {
      this.movies = JSON.parse(localStorage.getItem(this.userID));
    } else {
      this.movies = [];
      localStorage.setItem(this.userID, JSON.stringify(this.movies));
    }
  }

  updateLocalMovies(movieID: number, list: string) {
    if (this.movies.filter(movie => movie.id === movieID).length > 0) {
      this.movies = this.updateMovies(this.movies, movieID, list);
    } else {
      this.movies.push({
        id: movieID,
        lists: [list]
      });
    }
    localStorage.setItem(this.userID, JSON.stringify(this.movies));
  }

  updateMovies(moviesArr: Array<Movie | LocalMovie>, movieID: number, list: string): any {
    return moviesArr.map(movie => {
      if (movie.id === movieID) {
        if (movie.lists.includes(list)) {
          movie.lists = movie.lists.filter(mlist => mlist !== list);
        } else {
          movie.lists.push(list);
        }
      }
      return movie;
    });
  }
}
