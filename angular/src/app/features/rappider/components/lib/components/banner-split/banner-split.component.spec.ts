import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderBannerSplitComponent } from './banner-split.component';

describe('RappiderBannerSplitComponent', () => {
  let component: RappiderBannerSplitComponent;
  let fixture: ComponentFixture<RappiderBannerSplitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderBannerSplitComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderBannerSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
