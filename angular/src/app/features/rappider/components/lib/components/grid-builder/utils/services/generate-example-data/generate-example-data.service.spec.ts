import { TestBed } from '@angular/core/testing';

import { GenerateExampleDataService } from './generate-example-data.service';

describe('GenerateExampleDataService', () => {
  let service: GenerateExampleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateExampleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
