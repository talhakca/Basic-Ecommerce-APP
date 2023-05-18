import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderFeedbackComponent } from './feedback.component';

describe('RappiderFeedbackComponent', () => {
  let component: RappiderFeedbackComponent;
  let fixture: ComponentFixture<RappiderFeedbackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderFeedbackComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
