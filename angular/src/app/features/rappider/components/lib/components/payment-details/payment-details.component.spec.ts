import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RappiderPaymentDetailsComponent } from './payment-details.component';

describe('RappiderPaymentDetailsComponent', () => {
  let component: RappiderPaymentDetailsComponent;
  let fixture: ComponentFixture<RappiderPaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderPaymentDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
