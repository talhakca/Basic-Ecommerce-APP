import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCreditCardFormComponent } from './credit-card-form.component';

describe('RappiderCreditCardFormComponent', () => {
  let component: RappiderCreditCardFormComponent;
  let fixture: ComponentFixture<RappiderCreditCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCreditCardFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCreditCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
