import {
  waitForAsync,
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { RappiderListFourComponent } from './list-four.component';

describe('RappiderListFourComponent', () => {
  let component: RappiderListFourComponent;
  let fixture: ComponentFixture<RappiderListFourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderListFourComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderListFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
