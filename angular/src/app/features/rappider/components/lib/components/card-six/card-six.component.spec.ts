import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardSixComponent } from './card-six.component';

describe('RappiderCardSixComponent', () => {
  let component: RappiderCardSixComponent;
  let fixture: ComponentFixture<RappiderCardSixComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardSixComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
