import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTestimonialListComponent } from './testimonial-list.component';

describe('TestimonialListComponent', () => {
  let component: RappiderTestimonialListComponent;
  let fixture: ComponentFixture<RappiderTestimonialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderTestimonialListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTestimonialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
