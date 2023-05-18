import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderAddressFormComponent } from './address-form.component';

describe('RappiderAddressFormComponent', () => {
  let component: RappiderAddressFormComponent;
  let fixture: ComponentFixture<RappiderAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderAddressFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
