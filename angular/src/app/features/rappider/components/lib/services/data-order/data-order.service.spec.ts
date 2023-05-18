import { TestBed } from '@angular/core/testing';

import { RappiderDataOrderService } from './data-order.service';

describe('RappiderDataOrderService', () => {
  let service: RappiderDataOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RappiderDataOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
