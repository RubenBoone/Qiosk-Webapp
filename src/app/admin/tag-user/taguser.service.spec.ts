import { TestBed } from '@angular/core/testing';

import { TaguserService } from './taguser.service';

describe('TaguserService', () => {
  let service: TaguserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaguserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
