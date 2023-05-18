import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCodemirrorInputFormComponent } from './codemirror-input-form.component';

describe('CodemirrorInputFormComponent', () => {
  let component: RappiderCodemirrorInputFormComponent;
  let fixture: ComponentFixture<RappiderCodemirrorInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCodemirrorInputFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCodemirrorInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
