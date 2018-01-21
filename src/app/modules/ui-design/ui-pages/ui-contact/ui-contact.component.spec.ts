import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiContactComponent } from './ui-contact.component';

describe('UiContactComponent', () => {
  let component: UiContactComponent;
  let fixture: ComponentFixture<UiContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
