import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderImageUploadComponent } from './image-upload.component';

describe('ImageUploadComponent', () => {
  let component: RappiderImageUploadComponent;
  let fixture: ComponentFixture<RappiderImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderImageUploadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
