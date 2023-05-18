import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderImageTimerComponent } from './image-timer.component';

describe('ImageTimerComponent', () => {
  let component: RappiderImageTimerComponent;
  let fixture: ComponentFixture<RappiderImageTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderImageTimerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderImageTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
