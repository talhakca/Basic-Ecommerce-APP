import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RappiderListTwoComponent } from './list-two.component';

describe('RappiderListTwoComponent', () => {
  let component: RappiderListTwoComponent;
  let fixture: ComponentFixture<RappiderListTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderListTwoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
