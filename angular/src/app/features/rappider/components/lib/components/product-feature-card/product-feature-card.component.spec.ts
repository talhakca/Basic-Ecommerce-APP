import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderProductFeatureCardComponent } from './product-feature-card.component';

describe('RappiderProductFeatureCardComponent', () => {
  let component: RappiderProductFeatureCardComponent;
  let fixture: ComponentFixture<RappiderProductFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderProductFeatureCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProductFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
