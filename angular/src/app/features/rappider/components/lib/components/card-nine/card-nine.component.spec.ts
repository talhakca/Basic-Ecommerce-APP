import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardNineComponent } from './card-nine.component';

describe('RappiderCardNineComponent', () => {
  let component: RappiderCardNineComponent;
  let fixture: ComponentFixture<RappiderCardNineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardNineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
