import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderInputLabelComponent } from './input-label.component';

describe('RappiderInputLabelComponent', () => {
  let component: RappiderInputLabelComponent;
  let fixture: ComponentFixture<RappiderInputLabelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderInputLabelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderInputLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
