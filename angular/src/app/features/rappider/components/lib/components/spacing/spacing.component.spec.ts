import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderSpacingComponent } from './spacing.component';

describe('SpacingComponent', () => {
  let component: RappiderSpacingComponent;
  let fixture: ComponentFixture<RappiderSpacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderSpacingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderSpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
