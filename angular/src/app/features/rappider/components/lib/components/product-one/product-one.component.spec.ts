import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderProductOneComponent } from './product-one.component';

describe('RappiderProductOneComponent', () => {
  let component: RappiderProductOneComponent;
  let fixture: ComponentFixture<RappiderProductOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderProductOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProductOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
