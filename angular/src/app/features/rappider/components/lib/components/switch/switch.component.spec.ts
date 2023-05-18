import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderSwitchComponent } from './switch.component';

describe('RappiderSwitchComponent', () => {
  let component: RappiderSwitchComponent;
  let fixture: ComponentFixture<RappiderSwitchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderSwitchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
