import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RappiderAddressCardComponent } from './address-card.component';

describe('RappiderAddressCardComponent', () => {
  let component: RappiderAddressCardComponent;
  let fixture: ComponentFixture<RappiderAddressCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderAddressCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAddressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
