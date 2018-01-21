import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxTemplateComponent } from './parallax-template.component';

describe('ParallaxTemplateComponent', () => {
  let component: ParallaxTemplateComponent;
  let fixture: ComponentFixture<ParallaxTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
