import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderHtmlEditorComponent } from './html-editor.component';

describe('RappiderHtmlEditorComponent', () => {
  let component: RappiderHtmlEditorComponent;
  let fixture: ComponentFixture<RappiderHtmlEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderHtmlEditorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderHtmlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
