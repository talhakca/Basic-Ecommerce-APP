import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTreeGridComponent } from './tree-grid.component';

describe('RappiderTreeGridComponent', () => {
  let component: RappiderTreeGridComponent;
  let fixture: ComponentFixture<RappiderTreeGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTreeGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTreeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
