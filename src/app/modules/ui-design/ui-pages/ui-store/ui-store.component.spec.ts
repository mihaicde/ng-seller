import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiStoreComponent } from './ui-store.component';

describe('UiStoreComponent', () => {
  let component: UiStoreComponent;
  let fixture: ComponentFixture<UiStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
