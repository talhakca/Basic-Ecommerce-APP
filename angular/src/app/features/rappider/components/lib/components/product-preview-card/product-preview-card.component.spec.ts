import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderProductPreviewCardComponent } from './product-preview-card.component';

describe('RappiderProductPreviewCardComponent', () => {
  let component: RappiderProductPreviewCardComponent;
  let fixture: ComponentFixture<RappiderProductPreviewCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderProductPreviewCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProductPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
