import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderBorderSettingsComponent } from './border-settings.component';

describe('BorderSettingsComponent', () => {
  let component: RappiderBorderSettingsComponent;
  let fixture: ComponentFixture<RappiderBorderSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderBorderSettingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderBorderSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
