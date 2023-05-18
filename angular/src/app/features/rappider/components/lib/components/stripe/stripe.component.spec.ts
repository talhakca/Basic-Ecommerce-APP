import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderStripeComponent } from './stripe.component';

describe('StripeComponent', () => {
  let component: RappiderStripeComponent;
  let fixture: ComponentFixture<RappiderStripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderStripeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
