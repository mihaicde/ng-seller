import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThHomeComponent } from './th-home.component';

describe('ThHomeComponent', () => {
  let component: ThHomeComponent;
  let fixture: ComponentFixture<ThHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
