import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCheckboxComponent } from './checkbox.component';

describe('RappiderCheckboxComponent', () => {
  let component: RappiderCheckboxComponent;
  let fixture: ComponentFixture<RappiderCheckboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCheckboxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
