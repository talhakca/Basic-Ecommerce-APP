import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCountdownComponent } from './countdown.component';

describe('RappiderCountdownComponent', () => {
  let component: RappiderCountdownComponent;
  let fixture: ComponentFixture<RappiderCountdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCountdownComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
