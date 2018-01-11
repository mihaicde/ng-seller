import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconBlockComponent } from './ui-icon-block.component';

describe('UiIconBlockComponent', () => {
  let component: UiIconBlockComponent;
  let fixture: ComponentFixture<UiIconBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiIconBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiIconBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
