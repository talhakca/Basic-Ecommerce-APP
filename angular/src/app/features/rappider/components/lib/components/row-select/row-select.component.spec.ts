import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderRowSelectComponent } from './row-select.component';

describe('RowSelectComponent', () => {
  let component: RappiderRowSelectComponent;
  let fixture: ComponentFixture<RappiderRowSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderRowSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderRowSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
