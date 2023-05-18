import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RappiderReviewResultsComponent } from './review-results.component';

describe('RappiderReviewResultsComponent', () => {
  let component: RappiderReviewResultsComponent;
  let fixture: ComponentFixture<RappiderReviewResultsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderReviewResultsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderReviewResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
