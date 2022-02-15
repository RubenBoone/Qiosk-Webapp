import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVisComponent } from './data-vis.component';

describe('DataVisComponent', () => {
  let component: DataVisComponent;
  let fixture: ComponentFixture<DataVisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataVisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
