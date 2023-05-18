import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTextareaComponent } from './textarea.component';

describe('RappiderTextareaComponent', () => {
  let component: RappiderTextareaComponent;
  let fixture: ComponentFixture<RappiderTextareaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTextareaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
