import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCcsComponent } from './card-ccs.component';

describe('CardCcsComponent', () => {
  let component: CardCcsComponent;
  let fixture: ComponentFixture<CardCcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCcsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
