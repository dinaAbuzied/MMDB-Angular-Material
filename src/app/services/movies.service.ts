import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  localUrl = 'api/upComing';

  constructor(private http: HttpClient) { }

  getNowPlaying() {
    return this.http.get(this.localUrl);
  }
}
