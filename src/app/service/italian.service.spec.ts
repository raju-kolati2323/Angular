import { TestBed } from '@angular/core/testing';

import { ItalianService } from './italian.service';

describe('ItalianService', () => {
  let service: ItalianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItalianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
