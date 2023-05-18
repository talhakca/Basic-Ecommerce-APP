import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderBadgeComponent } from './badge.component';

describe('RappiderBadgeComponent', () => {
  let component: RappiderBadgeComponent;
  let fixture: ComponentFixture<RappiderBadgeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderBadgeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
