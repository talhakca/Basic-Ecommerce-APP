import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTimelineCardComponent } from './timeline-card.component';

describe('RappiderTimelineCardComponent', () => {
  let component: RappiderTimelineCardComponent;
  let fixture: ComponentFixture<RappiderTimelineCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTimelineCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTimelineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
