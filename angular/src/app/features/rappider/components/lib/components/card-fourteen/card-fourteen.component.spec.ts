import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardFourteenComponent } from './card-fourteen.component';

describe('CardFourteenComponent', () => {
  let component: RappiderCardFourteenComponent;
  let fixture: ComponentFixture<RappiderCardFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCardFourteenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
