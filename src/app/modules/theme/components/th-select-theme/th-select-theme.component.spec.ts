import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThSelectThemeComponent } from './th-select-theme.component';

describe('ThSelectThemeComponent', () => {
  let component: ThSelectThemeComponent;
  let fixture: ComponentFixture<ThSelectThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThSelectThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThSelectThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
