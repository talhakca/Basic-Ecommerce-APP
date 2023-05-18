import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderPricingPlanComponent } from './pricing-plan.component';

describe('RappiderPricingPlanComponent', () => {
  let component: RappiderPricingPlanComponent;
  let fixture: ComponentFixture<RappiderPricingPlanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderPricingPlanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderPricingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
