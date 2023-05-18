import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTextComponent } from './text.component';

describe('RappiderTextComponent', () => {
  let component: RappiderTextComponent;
  let fixture: ComponentFixture<RappiderTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTextComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
