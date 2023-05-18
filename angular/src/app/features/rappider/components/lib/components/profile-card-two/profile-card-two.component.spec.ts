import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderProfileCardTwoComponent } from './profile-card-two.component';

describe('ProfileCardTwoComponent', () => {
  let component: RappiderProfileCardTwoComponent;
  let fixture: ComponentFixture<RappiderProfileCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderProfileCardTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProfileCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
