import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteSideNavComponent } from './website-side-nav.component';

describe('WebsiteSideNavComponent', () => {
  let component: WebsiteSideNavComponent;
  let fixture: ComponentFixture<WebsiteSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
