import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderSpinComponent } from './spin.component';

describe('RappiderSpinComponent', () => {
  let component: RappiderSpinComponent;
  let fixture: ComponentFixture<RappiderSpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderSpinComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
