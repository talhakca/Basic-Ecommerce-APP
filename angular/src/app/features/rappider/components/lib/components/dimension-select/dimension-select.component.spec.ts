import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderDimensionSelectComponent } from './dimension-select.component';

describe('RappiderDimensionSelectComponent', () => {
  let component: RappiderDimensionSelectComponent;
  let fixture: ComponentFixture<RappiderDimensionSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderDimensionSelectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderDimensionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
