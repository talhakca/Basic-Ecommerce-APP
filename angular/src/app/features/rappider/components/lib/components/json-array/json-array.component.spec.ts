import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderJsonArrayComponent } from './json-array.component';

describe('RappiderJsonArrayComponent', () => {
  let component: RappiderJsonArrayComponent;
  let fixture: ComponentFixture<RappiderJsonArrayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderJsonArrayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderJsonArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
