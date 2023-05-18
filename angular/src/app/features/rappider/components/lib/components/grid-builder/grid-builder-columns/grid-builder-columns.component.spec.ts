import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBuilderColumnsComponent } from './grid-builder-columns.component';

describe('GridBuilderColumnsComponent', () => {
  let component: GridBuilderColumnsComponent;
  let fixture: ComponentFixture<GridBuilderColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridBuilderColumnsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBuilderColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
