import { TestBed } from '@angular/core/testing';

import { MovesService } from './moves.service';

describe('SummaryService', () => {
  let service: MovesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
