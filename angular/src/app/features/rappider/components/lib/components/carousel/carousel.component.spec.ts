import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCarouselComponent } from './carousel.component';

describe('RappiderCarouselComponent', () => {
  let component: RappiderCarouselComponent;
  let fixture: ComponentFixture<RappiderCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCarouselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
