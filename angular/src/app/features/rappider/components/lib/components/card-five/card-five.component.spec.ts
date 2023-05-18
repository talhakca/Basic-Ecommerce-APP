import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardFiveComponent } from './card-five.component';

describe('RappiderCardFiveComponent', () => {
  let component: RappiderCardFiveComponent;
  let fixture: ComponentFixture<RappiderCardFiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardFiveComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
