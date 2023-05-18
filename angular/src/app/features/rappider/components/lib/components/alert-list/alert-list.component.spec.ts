import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderAlertListComponent } from './alert-list.component';

describe('AlertListComponent', () => {
  let component: RappiderAlertListComponent;
  let fixture: ComponentFixture<RappiderAlertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderAlertListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAlertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
