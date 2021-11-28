import { TestBed } from '@angular/core/testing';

import { FakeHttpServiceService } from './fake-http-service.service';

describe('FakeHttpServiceService', () => {
  let service: FakeHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
