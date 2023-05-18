import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCalendarComponent } from './calendar.component';

describe('RappiderCalendarComponent', () => {
  let component: RappiderCalendarComponent;
  let fixture: ComponentFixture<RappiderCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCalendarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
