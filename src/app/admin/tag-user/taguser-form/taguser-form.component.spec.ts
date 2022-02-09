import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaguserFormComponent } from './taguser-form.component';

describe('TaguserFormComponent', () => {
  let component: TaguserFormComponent;
  let fixture: ComponentFixture<TaguserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaguserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaguserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
