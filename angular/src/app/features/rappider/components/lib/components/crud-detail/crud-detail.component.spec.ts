import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCrudDetailComponent } from './crud-detail.component';

describe('RappiderCrudDetailComponent', () => {
  let component: RappiderCrudDetailComponent;
  let fixture: ComponentFixture<RappiderCrudDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCrudDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCrudDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
