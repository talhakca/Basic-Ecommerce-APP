import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderSelectComponent } from './select.component';

describe('RappiderSelectComponent', () => {
  let component: RappiderSelectComponent;
  let fixture: ComponentFixture<RappiderSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderSelectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
