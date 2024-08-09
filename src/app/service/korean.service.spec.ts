import { TestBed } from '@angular/core/testing';

import { KoreanService } from './korean.service';

describe('KoreanService', () => {
  let service: KoreanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoreanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
