import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderAlternativeCarouselComponent } from './alternative-carousel.component';

describe('AlternativeCarouselComponent', () => {
  let component: RappiderAlternativeCarouselComponent;
  let fixture: ComponentFixture<RappiderAlternativeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderAlternativeCarouselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAlternativeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
