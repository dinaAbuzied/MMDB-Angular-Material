import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { nowPlaying } from '../../data/nowPlaying';
import { upComing } from '../../data/upComing';
import { genres } from '../../data/genres';
import { movieDetails, movieCredits, movieVideos } from '../../data/movieDetails';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { nowPlaying, upComing, movieDetails, movieCredits, movieVideos, genres };
  }
}
