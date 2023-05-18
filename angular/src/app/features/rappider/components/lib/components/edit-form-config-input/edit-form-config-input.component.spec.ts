import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderEditFormConfigInputComponent } from './edit-form-config-input.component';

describe('RappiderEditFormConfigInputComponent', () => {
  let component: RappiderEditFormConfigInputComponent;
  let fixture: ComponentFixture<RappiderEditFormConfigInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderEditFormConfigInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderEditFormConfigInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
