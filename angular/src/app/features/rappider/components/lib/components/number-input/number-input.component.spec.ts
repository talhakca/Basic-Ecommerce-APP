import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderNumberInputComponent } from './number-input.component';

describe('RappiderNumberInputComponent', () => {
  let component: RappiderNumberInputComponent;
  let fixture: ComponentFixture<RappiderNumberInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderNumberInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
