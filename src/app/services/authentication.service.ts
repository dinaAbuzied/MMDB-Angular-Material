import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: User;

  public get currentUser(): User {
    return this.user;
  }

  constructor() {
    this.user = JSON.parse(localStorage.getItem('$user'));
  }

  login(user: User) {
    this.user = {...user};
    localStorage.setItem('$user', JSON.stringify(user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('$user');
  }
}
