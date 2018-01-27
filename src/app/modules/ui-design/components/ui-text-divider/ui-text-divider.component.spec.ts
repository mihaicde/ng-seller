import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTextDividerComponent } from './ui-text-divider.component';

describe('UiTextDividerComponent', () => {
  let component: UiTextDividerComponent;
  let fixture: ComponentFixture<UiTextDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTextDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTextDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
