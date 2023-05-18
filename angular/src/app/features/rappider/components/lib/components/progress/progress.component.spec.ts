import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderProgressComponent } from './progress.component';

describe('RappiderProgressComponent', () => {
  let component: RappiderProgressComponent;
  let fixture: ComponentFixture<RappiderProgressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderProgressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
