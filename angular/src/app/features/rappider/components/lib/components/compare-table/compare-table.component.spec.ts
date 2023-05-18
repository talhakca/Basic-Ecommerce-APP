import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RappiderCompareTableComponent } from './compare-table.component';

describe('RappiderCompareTableComponent', () => {
  let component: RappiderCompareTableComponent;
  let fixture: ComponentFixture<RappiderCompareTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCompareTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCompareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
