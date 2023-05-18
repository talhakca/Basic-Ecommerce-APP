import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderRateComponent } from './rate.component';

describe('RappiderRateComponent', () => {
  let component: RappiderRateComponent;
  let fixture: ComponentFixture<RappiderRateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderRateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
