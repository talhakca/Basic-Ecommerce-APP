import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderWeatherConditionComponent } from './weather-condition.component';

describe('RappiderWeatherConditionComponent', () => {
  let component: RappiderWeatherConditionComponent;
  let fixture: ComponentFixture<RappiderWeatherConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderWeatherConditionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderWeatherConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
