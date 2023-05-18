import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderInputValidatorInfoComponent } from './input-validator-info.component';

describe('RappiderInputValidatorInfoComponent', () => {
  let component: RappiderInputValidatorInfoComponent;
  let fixture: ComponentFixture<RappiderInputValidatorInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderInputValidatorInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderInputValidatorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
