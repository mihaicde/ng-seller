import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPricingComponent } from './ui-pricing.component';

describe('UiPricingComponent', () => {
  let component: UiPricingComponent;
  let fixture: ComponentFixture<UiPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
