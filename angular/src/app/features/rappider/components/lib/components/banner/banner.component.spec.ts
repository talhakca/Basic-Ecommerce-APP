import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderBannerComponent } from './banner.component';

describe('RappiderBannerComponent', () => {
  let component: RappiderBannerComponent;
  let fixture: ComponentFixture<RappiderBannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderBannerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
