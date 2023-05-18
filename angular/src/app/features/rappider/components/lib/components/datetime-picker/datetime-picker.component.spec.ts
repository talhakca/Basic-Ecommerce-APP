import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderDatetimePickerComponent } from './datetime-picker.component';

describe('RappiderDatetimePickerComponent', () => {
  let component: RappiderDatetimePickerComponent;
  let fixture: ComponentFixture<RappiderDatetimePickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderDatetimePickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
