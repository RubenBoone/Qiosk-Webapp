import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTagComponent } from './link-tag.component';

describe('LinkTagComponent', () => {
  let component: LinkTagComponent;
  let fixture: ComponentFixture<LinkTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
