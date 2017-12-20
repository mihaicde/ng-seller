import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWebsiteComponent } from './select-website.component';

describe('SelectWebsiteComponent', () => {
  let component: SelectWebsiteComponent;
  let fixture: ComponentFixture<SelectWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
