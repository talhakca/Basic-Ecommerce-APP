import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RappiderTitleImageComponent } from './title-image.component';

describe('RappiderTitleImageComponent', () => {
  let component: RappiderTitleImageComponent;
  let fixture: ComponentFixture<RappiderTitleImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTitleImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTitleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
