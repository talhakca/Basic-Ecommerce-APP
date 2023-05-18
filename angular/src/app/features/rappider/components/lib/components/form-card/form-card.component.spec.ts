import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderFormCardComponent } from './form-card.component';

describe('RappiderFormCardComponent', () => {
  let component: RappiderFormCardComponent;
  let fixture: ComponentFixture<RappiderFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderFormCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
