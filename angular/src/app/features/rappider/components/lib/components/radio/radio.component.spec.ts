import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderRadioComponent } from './radio.component';

describe('RappiderRadioComponent', () => {
  let component: RappiderRadioComponent;
  let fixture: ComponentFixture<RappiderRadioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderRadioComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
