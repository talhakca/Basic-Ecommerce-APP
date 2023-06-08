import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouslyPurchasedComponent } from './previously-purchased.component';

describe('PreviouslyPurchasedComponent', () => {
  let component: PreviouslyPurchasedComponent;
  let fixture: ComponentFixture<PreviouslyPurchasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviouslyPurchasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviouslyPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
