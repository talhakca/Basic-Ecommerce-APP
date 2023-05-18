import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderAssetPickerComponent } from './asset-picker.component';

describe('RappiderAssetPickerComponent', () => {
  let component: RappiderAssetPickerComponent;
  let fixture: ComponentFixture<RappiderAssetPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderAssetPickerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAssetPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
