import { TestBed } from '@angular/core/testing';

import { DataFormatterService } from './data-formatter.service';

describe('DataFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFormatterService = TestBed.get(DataFormatterService);
    expect(service).toBeTruthy();
  });
});
