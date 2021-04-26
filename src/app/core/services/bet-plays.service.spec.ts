import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BetPlaysService } from './bet-plays.service';

describe('BetPlaysService', () => {
  let service: BetPlaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BetPlaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
