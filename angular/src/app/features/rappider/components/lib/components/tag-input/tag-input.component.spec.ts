import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTagInputComponent } from './tag-input.component';

describe('RappiderTagInputComponent', () => {
  let component: RappiderTagInputComponent;
  let fixture: ComponentFixture<RappiderTagInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTagInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTagInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
