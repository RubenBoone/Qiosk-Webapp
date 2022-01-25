import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskTableComponent } from './kiosk-table.component';

describe('KioskTableComponent', () => {
  let component: KioskTableComponent;
  let fixture: ComponentFixture<KioskTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KioskTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
