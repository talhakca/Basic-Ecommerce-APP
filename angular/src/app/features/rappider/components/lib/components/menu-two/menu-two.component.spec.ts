import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderMenuTwoComponent } from './menu-two.component';

describe('RappiderMenuTwoComponent', () => {
  let component: RappiderMenuTwoComponent;
  let fixture: ComponentFixture<RappiderMenuTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderMenuTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderMenuTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
