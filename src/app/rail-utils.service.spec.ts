import { TestBed } from '@angular/core/testing';

import { RailUtilsService } from './rail-utils.service';

describe('RailUtilsService', () => {
  let service: RailUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RailUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
