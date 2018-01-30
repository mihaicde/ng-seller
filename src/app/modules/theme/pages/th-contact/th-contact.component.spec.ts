import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThContactComponent } from './th-contact.component';

describe('ThContactComponent', () => {
  let component: ThContactComponent;
  let fixture: ComponentFixture<ThContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
