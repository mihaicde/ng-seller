import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThAboutComponent } from './th-about.component';

describe('ThAboutComponent', () => {
  let component: ThAboutComponent;
  let fixture: ComponentFixture<ThAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
