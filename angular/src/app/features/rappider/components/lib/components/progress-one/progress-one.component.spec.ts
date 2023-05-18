import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderProgressOneComponent } from './progress-one.component';

describe('RappiderProgressOneComponent', () => {
  let component: RappiderProgressOneComponent;
  let fixture: ComponentFixture<RappiderProgressOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderProgressOneComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProgressOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
