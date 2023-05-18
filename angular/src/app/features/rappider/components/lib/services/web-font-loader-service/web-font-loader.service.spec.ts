import { TestBed } from '@angular/core/testing';

import { WebFontLoaderService } from './web-font-loader.service';

describe('WebFontLoaderService', () => {
  let service: WebFontLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebFontLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
