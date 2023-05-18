import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTimePickerComponent } from './time-picker.component';

describe('RappiderTimePickerComponent', () => {
  let component: RappiderTimePickerComponent;
  let fixture: ComponentFixture<RappiderTimePickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTimePickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
