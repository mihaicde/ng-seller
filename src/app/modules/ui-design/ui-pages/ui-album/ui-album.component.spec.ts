import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAlbumComponent } from './ui-album.component';

describe('UiAlbumComponent', () => {
  let component: UiAlbumComponent;
  let fixture: ComponentFixture<UiAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
