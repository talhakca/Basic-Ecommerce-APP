import { TestBed } from '@angular/core/testing';

import { RappiderPaginationService } from './pagination.service';

describe('RappiderPaginationService', () => {
  let service: RappiderPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RappiderPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
