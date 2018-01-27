import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPortfolioComponent } from './ui-portfolio.component';

describe('UiPortfolioComponent', () => {
  let component: UiPortfolioComponent;
  let fixture: ComponentFixture<UiPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
