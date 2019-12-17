import { TestBed } from '@angular/core/testing';

import { LocalMovies } from './local-movies.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalMovies = TestBed.get(LocalMovies);
    expect(service).toBeTruthy();
  });
});
