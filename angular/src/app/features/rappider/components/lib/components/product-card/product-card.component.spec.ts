import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderProductCardComponent } from './product-card.component';

describe('RappiderProductCardComponent', () => {
  let component: RappiderProductCardComponent;
  let fixture: ComponentFixture<RappiderProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderProductCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
