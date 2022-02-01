import { TestBed } from '@angular/core/testing';

import { UserBookingService } from './user-booking.service';

describe('UserBookingService', () => {
  let service: UserBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
