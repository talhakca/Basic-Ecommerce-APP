import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderStatisticComponent } from './statistic.component';

describe('RappiderStatisticComponent', () => {
  let component: RappiderStatisticComponent;
  let fixture: ComponentFixture<RappiderStatisticComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderStatisticComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
