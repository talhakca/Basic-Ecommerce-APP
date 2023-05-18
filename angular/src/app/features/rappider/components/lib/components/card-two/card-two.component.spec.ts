import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardTwoComponent } from './card-two.component';

describe('RappiderCardTwoComponent', () => {
  let component: RappiderCardTwoComponent;
  let fixture: ComponentFixture<RappiderCardTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardTwoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
