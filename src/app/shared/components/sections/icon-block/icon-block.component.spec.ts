import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBlockComponent } from './icon-block.component';

describe('IconBlockComponent', () => {
  let component: IconBlockComponent;
  let fixture: ComponentFixture<IconBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
