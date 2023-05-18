import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardThirteenComponent } from './card-thirteen.component';

describe('RappiderCardThirteenComponent', () => {
  let component: RappiderCardThirteenComponent;
  let fixture: ComponentFixture<RappiderCardThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCardThirteenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
