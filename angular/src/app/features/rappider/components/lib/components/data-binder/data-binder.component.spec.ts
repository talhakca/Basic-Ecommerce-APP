import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderDataBinderComponent } from './data-binder.component';

describe('RappiderDataBinderComponent', () => {
  let component: RappiderDataBinderComponent;
  let fixture: ComponentFixture<RappiderDataBinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderDataBinderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderDataBinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
