import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskFormComponent } from './kiosk-form.component';

describe('KioskFormComponent', () => {
  let component: KioskFormComponent;
  let fixture: ComponentFixture<KioskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KioskFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
