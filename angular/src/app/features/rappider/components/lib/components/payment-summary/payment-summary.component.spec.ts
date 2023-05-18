import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RappiderPaymentSummaryComponent } from './payment-summary.component';

describe('RappiderPaymentSummaryComponent', () => {
  let component: RappiderPaymentSummaryComponent;
  let fixture: ComponentFixture<RappiderPaymentSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderPaymentSummaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderPaymentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
