import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardFourComponent } from './card-four.component';

describe('RappiderCardFourComponent', () => {
  let component: RappiderCardFourComponent;
  let fixture: ComponentFixture<RappiderCardFourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardFourComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
