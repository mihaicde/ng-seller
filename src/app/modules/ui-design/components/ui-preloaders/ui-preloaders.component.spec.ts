import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPreloadersComponent } from './ui-preloaders.component';

describe('UiPreloadersComponent', () => {
  let component: UiPreloadersComponent;
  let fixture: ComponentFixture<UiPreloadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPreloadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPreloadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
