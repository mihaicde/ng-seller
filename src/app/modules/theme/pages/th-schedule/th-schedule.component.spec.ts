import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThScheduleComponent } from './th-schedule.component';

describe('ThScheduleComponent', () => {
  let component: ThScheduleComponent;
  let fixture: ComponentFixture<ThScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
