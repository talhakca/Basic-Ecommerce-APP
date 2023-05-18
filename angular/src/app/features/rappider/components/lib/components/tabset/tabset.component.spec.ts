import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTabsetComponent } from './tabset.component';

describe('RappiderTabsetComponent', () => {
  let component: RappiderTabsetComponent;
  let fixture: ComponentFixture<RappiderTabsetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTabsetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
