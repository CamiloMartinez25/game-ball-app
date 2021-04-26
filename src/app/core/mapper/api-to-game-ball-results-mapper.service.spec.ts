import { TestBed } from '@angular/core/testing';

import { ApiToGameBallResultsMapperService } from './api-to-game-ball-results-mapper.service';

describe('ApiToGameBallResultsMapperService', () => {
  let service: ApiToGameBallResultsMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiToGameBallResultsMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
