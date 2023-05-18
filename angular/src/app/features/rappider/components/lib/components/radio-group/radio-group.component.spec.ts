import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderRadioGroupComponent } from './radio-group.component';

describe('RappiderRadioGroupComponent', () => {
  let component: RappiderRadioGroupComponent;
  let fixture: ComponentFixture<RappiderRadioGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderRadioGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
