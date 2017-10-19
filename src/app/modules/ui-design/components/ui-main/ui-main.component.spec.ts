import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDesignComponent } from './ui-design.component';

describe('UiDesignComponent', () => {
  let component: UiDesignComponent;
  let fixture: ComponentFixture<UiDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
