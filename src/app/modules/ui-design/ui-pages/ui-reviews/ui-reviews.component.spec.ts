import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiReviewsComponent } from './ui-reviews.component';

describe('UiReviewsComponent', () => {
  let component: UiReviewsComponent;
  let fixture: ComponentFixture<UiReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
