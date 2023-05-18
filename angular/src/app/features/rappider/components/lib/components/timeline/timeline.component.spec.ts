import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTimelineComponent } from './timeline.component';

describe('RappiderTimelineComponent', () => {
  let component: RappiderTimelineComponent;
  let fixture: ComponentFixture<RappiderTimelineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTimelineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
