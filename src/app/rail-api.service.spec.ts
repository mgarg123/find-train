import { TestBed } from '@angular/core/testing';

import { RailApiService } from './rail-api.service';

describe('RailApiService', () => {
  let service: RailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
