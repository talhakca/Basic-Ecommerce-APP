import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderSliderComponent } from './slider.component';

describe('RappiderSliderComponent', () => {
  let component: RappiderSliderComponent;
  let fixture: ComponentFixture<RappiderSliderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderSliderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
