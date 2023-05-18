import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderLoadingNotificationComponent } from './loading-notification.component';

describe('RappiderLoadingNotificationComponent', () => {
  let component: RappiderLoadingNotificationComponent;
  let fixture: ComponentFixture<RappiderLoadingNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderLoadingNotificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderLoadingNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
