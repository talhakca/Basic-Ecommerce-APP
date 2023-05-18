import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderImageLabelComponent } from './image-label.component';

describe('RappiderImageLabelComponent', () => {
  let component: RappiderImageLabelComponent;
  let fixture: ComponentFixture<RappiderImageLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderImageLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderImageLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
