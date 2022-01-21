import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBookingComponent } from './main-booking.component';

describe('MainBookingComponent', () => {
  let component: MainBookingComponent;
  let fixture: ComponentFixture<MainBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainBookingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
