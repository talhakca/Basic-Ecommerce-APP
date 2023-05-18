import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderLottiePlayerComponent } from './lottie-player.component';

describe('RappiderLottiePlayerComponent', () => {
  let component: RappiderLottiePlayerComponent;
  let fixture: ComponentFixture<RappiderLottiePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderLottiePlayerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderLottiePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
