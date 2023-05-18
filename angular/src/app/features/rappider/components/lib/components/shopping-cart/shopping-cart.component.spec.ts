import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderShoppingCartComponent } from './shopping-cart.component';

describe('RappiderShoppingCartComponent', () => {
  let component: RappiderShoppingCartComponent;
  let fixture: ComponentFixture<RappiderShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderShoppingCartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
