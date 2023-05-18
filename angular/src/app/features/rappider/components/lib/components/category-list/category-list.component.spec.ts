import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCategoryListComponent } from './category-list.component';

describe('CategoryListComponent', () => {
  let component: RappiderCategoryListComponent;
  let fixture: ComponentFixture<RappiderCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCategoryListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
