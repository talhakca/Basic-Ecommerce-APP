import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTimeNoticeCardComponent } from './time-notice-card.component';

describe('TimeNoticeCardComponent', () => {
  let component: RappiderTimeNoticeCardComponent;
  let fixture: ComponentFixture<RappiderTimeNoticeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderTimeNoticeCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTimeNoticeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
