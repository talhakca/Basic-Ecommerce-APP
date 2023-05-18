import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoDiffEditorComponent } from './monaco-diff-editor.component';

describe('MonacoDiffEditorComponent', () => {
  let component: MonacoDiffEditorComponent;
  let fixture: ComponentFixture<MonacoDiffEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonacoDiffEditorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonacoDiffEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
