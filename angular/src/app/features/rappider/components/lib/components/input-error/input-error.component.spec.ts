import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderInputErrorComponent } from './input-error.component';

describe('RappiderInputErrorComponent', () => {
  let component: RappiderInputErrorComponent;
  let fixture: ComponentFixture<RappiderInputErrorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderInputErrorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderInputErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
