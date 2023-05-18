import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderDeliveredProductDetailComponent } from './delivered-product-detail.component';

describe('RappiderDeliveredProductDetailComponent', () => {
  let component: RappiderDeliveredProductDetailComponent;
  let fixture: ComponentFixture<RappiderDeliveredProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderDeliveredProductDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderDeliveredProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
