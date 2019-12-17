import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { LocalMoviesService } from './local-movies.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: User;

  public get currentUser(): User {
    return this.user;
  }

  constructor(private lm: LocalMoviesService) {
    this.user = JSON.parse(localStorage.getItem('$user'));
  }

  login(user: User) {
    this.user = {...user};
    localStorage.setItem('$user', JSON.stringify(user));
    this.lm.setLocalMovies(this.user);
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('$user');
  }
}
