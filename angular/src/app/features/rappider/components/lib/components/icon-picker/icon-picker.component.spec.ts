import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderIconPickerComponent } from './icon-picker.component';

describe('RappiderIconPickerComponent', () => {
  let component: RappiderIconPickerComponent;
  let fixture: ComponentFixture<RappiderIconPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderIconPickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderIconPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
