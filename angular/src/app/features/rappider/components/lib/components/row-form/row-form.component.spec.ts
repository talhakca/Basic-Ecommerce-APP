import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderRowFormComponent } from './row-form.component';

describe('RappiderRowFormComponent', () => {
  let component: RappiderRowFormComponent;
  let fixture: ComponentFixture<RappiderRowFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderRowFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderRowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
