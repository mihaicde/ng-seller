import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiParallaxComponent } from './ui-parallax.component';

describe('UiParallaxComponent', () => {
  let component: UiParallaxComponent;
  let fixture: ComponentFixture<UiParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
