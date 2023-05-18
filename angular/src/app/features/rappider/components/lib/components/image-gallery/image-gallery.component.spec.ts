import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderImageGalleryComponent } from './image-gallery.component';

describe('RappiderImageGalleryComponent', () => {
  let component: RappiderImageGalleryComponent;
  let fixture: ComponentFixture<RappiderImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderImageGalleryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
