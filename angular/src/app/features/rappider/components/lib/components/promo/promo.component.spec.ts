import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderPromoComponent } from './promo.component';

describe('RappiderPromoComponent', () => {
  let component: RappiderPromoComponent;
  let fixture: ComponentFixture<RappiderPromoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderPromoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
