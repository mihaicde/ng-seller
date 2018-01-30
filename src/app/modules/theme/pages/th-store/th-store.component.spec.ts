import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThStoreComponent } from './th-store.component';

describe('ThStoreComponent', () => {
  let component: ThStoreComponent;
  let fixture: ComponentFixture<ThStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
