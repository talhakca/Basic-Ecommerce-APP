import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RappiderProductRecommendationsComponent } from './product-recommendations.component';

describe('RappiderProductRecommendationsComponent', () => {
  let component: RappiderProductRecommendationsComponent;
  let fixture: ComponentFixture<RappiderProductRecommendationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderProductRecommendationsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProductRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
