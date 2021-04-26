import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BallGameFacadeService } from './ball-game-facade.service';

describe('BallGameFacadeService', () => {
  let service: BallGameFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BallGameFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
