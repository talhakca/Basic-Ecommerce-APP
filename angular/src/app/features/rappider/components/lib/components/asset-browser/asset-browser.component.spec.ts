import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderAssetBrowserComponent } from './asset-browser.component';

describe('RappiderAssetBrowserComponent', () => {
  let component: RappiderAssetBrowserComponent;
  let fixture: ComponentFixture<RappiderAssetBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderAssetBrowserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAssetBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
