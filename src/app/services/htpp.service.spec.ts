import { TestBed } from '@angular/core/testing';

import { HttpService } from './htpp.service';

describe('HtppService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
