import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderPdfViewerComponent } from './pdf-viewer.component';

describe('RappiderPdfViewerComponent', () => {
  let component: RappiderPdfViewerComponent;
  let fixture: ComponentFixture<RappiderPdfViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderPdfViewerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
