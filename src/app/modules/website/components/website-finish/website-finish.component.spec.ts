import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteFinishComponent } from './website-finish.component';

describe('WebsiteFinishComponent', () => {
  let component: WebsiteFinishComponent;
  let fixture: ComponentFixture<WebsiteFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
