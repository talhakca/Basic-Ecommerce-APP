import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderHtmlViewerComponent } from './html-viewer.component';

describe('RappiderHtmlViewerComponent', () => {
  let component: RappiderHtmlViewerComponent;
  let fixture: ComponentFixture<RappiderHtmlViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderHtmlViewerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderHtmlViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
