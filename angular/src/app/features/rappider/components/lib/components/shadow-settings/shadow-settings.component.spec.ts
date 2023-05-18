import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderShadowSettingsComponent } from './shadow-settings.component';

describe('ShadowSettingsComponent', () => {
  let component: RappiderShadowSettingsComponent;
  let fixture: ComponentFixture<RappiderShadowSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderShadowSettingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderShadowSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
