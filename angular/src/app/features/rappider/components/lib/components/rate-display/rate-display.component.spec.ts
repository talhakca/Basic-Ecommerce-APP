import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderRateDisplayComponent } from './rate-display.component';

describe('RappiderRateDisplayComponent', () => {
  let component: RappiderRateDisplayComponent;
  let fixture: ComponentFixture<RappiderRateDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderRateDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderRateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
