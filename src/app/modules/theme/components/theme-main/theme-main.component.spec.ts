import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeMainComponent } from './theme-main.component';

describe('ThemeMainComponent', () => {
  let component: ThemeMainComponent;
  let fixture: ComponentFixture<ThemeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
