import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCodeEditorComponent } from './code-editor.component';

describe('CodeEditorComponent', () => {
  let component: RappiderCodeEditorComponent;
  let fixture: ComponentFixture<RappiderCodeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCodeEditorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
