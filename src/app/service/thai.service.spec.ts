import { TestBed } from '@angular/core/testing';

import { ThaiService } from './thai.service';

describe('ThaiService', () => {
  let service: ThaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
