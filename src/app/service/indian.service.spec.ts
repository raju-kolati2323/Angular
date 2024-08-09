import { TestBed } from '@angular/core/testing';

import { IndianService } from './indian.service';

describe('IndianService', () => {
  let service: IndianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
