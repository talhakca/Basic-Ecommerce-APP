import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderGalleryGridComponent } from './gallery-grid.component';

describe('RappiderGalleryGridComponent', () => {
  let component: RappiderGalleryGridComponent;
  let fixture: ComponentFixture<RappiderGalleryGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderGalleryGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderGalleryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
