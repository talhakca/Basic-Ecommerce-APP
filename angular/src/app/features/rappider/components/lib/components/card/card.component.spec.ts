import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardComponent } from './card.component';

describe('RappiderCardComponent', () => {
  let component: RappiderCardComponent;
  let fixture: ComponentFixture<RappiderCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
