import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTreeSelectComponent } from './tree-select.component';

describe('TreeSelectComponent', () => {
  let component: RappiderTreeSelectComponent;
  let fixture: ComponentFixture<RappiderTreeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderTreeSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
