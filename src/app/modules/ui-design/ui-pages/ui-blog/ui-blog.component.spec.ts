import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBlogComponent } from './ui-blog.component';

describe('UiBlogComponent', () => {
  let component: UiBlogComponent;
  let fixture: ComponentFixture<UiBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
