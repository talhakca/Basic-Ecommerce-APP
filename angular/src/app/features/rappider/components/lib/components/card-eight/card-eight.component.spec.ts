import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardEightComponent } from './card-eight.component';

describe('RappiderCardEightComponent', () => {
  let component: RappiderCardEightComponent;
  let fixture: ComponentFixture<RappiderCardEightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardEightComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
