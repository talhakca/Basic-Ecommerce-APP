import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCallToActionComponent } from './call-to-action.component';

describe('RappiderCallToActionComponent', () => {
  let component: RappiderCallToActionComponent;
  let fixture: ComponentFixture<RappiderCallToActionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCallToActionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
