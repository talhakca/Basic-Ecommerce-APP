import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderButtonComponent } from './button.component';

describe('RappiderButtonComponent', () => {
  let component: RappiderButtonComponent;
  let fixture: ComponentFixture<RappiderButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
