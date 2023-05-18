import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RappiderButtonGroupComponent } from './button-group.component';

describe('RappiderButtonGroupComponent', () => {
  let component: RappiderButtonGroupComponent;
  let fixture: ComponentFixture<RappiderButtonGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderButtonGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
