import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderProfileCardComponent } from './profile-card.component';

describe('RappiderProfileCardComponent', () => {
  let component: RappiderProfileCardComponent;
  let fixture: ComponentFixture<RappiderProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderProfileCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
