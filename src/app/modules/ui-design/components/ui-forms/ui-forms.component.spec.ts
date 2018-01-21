import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormsComponent } from './ui-forms.component';

describe('UiFormsComponent', () => {
  let component: UiFormsComponent;
  let fixture: ComponentFixture<UiFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
