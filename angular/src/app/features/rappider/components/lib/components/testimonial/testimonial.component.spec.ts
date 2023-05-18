import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTestimonialComponent } from './testimonial.component';

describe('RappiderTestimonialComponent', () => {
  let component: RappiderTestimonialComponent;
  let fixture: ComponentFixture<RappiderTestimonialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTestimonialComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
