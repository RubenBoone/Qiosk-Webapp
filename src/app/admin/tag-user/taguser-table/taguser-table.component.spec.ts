import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaguserTableComponent } from './taguser-table.component';

describe('TaguserTableComponent', () => {
  let component: TaguserTableComponent;
  let fixture: ComponentFixture<TaguserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaguserTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaguserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
