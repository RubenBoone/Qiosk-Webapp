import { TestBed } from '@angular/core/testing';

import { UserbookingService } from './userbooking.service';

describe('UserbookingService', () => {
  let service: UserbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
