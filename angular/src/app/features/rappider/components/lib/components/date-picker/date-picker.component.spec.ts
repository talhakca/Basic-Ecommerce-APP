import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderDatePickerComponent } from './date-picker.component';

describe('RappiderDatePickerComponent', () => {
  let component: RappiderDatePickerComponent;
  let fixture: ComponentFixture<RappiderDatePickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderDatePickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
