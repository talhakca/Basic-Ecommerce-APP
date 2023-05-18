import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardTwelveComponent } from './card-twelve.component';

describe('RappiderCardTwelveComponent', () => {
  let component: RappiderCardTwelveComponent;
  let fixture: ComponentFixture<RappiderCardTwelveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardTwelveComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
