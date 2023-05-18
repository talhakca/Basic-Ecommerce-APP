import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderDetailTableComponent } from './detail-table.component';

describe('RappiderDetailTableComponent', () => {
  let component: RappiderDetailTableComponent;
  let fixture: ComponentFixture<RappiderDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderDetailTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
