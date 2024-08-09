import { TestBed } from '@angular/core/testing';

import { ChineseService } from './chinese.service';

describe('ChineseService', () => {
  let service: ChineseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChineseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
