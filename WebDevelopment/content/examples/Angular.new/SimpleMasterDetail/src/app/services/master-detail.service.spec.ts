import { TestBed } from '@angular/core/testing';

import { MasterDetailService } from './master-detail.service';

describe('MasterDetailService', () => {
  let service: MasterDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
