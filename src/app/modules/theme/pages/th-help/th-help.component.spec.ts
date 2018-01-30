import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThHelpComponent } from './th-help.component';

describe('ThHelpComponent', () => {
  let component: ThHelpComponent;
  let fixture: ComponentFixture<ThHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
