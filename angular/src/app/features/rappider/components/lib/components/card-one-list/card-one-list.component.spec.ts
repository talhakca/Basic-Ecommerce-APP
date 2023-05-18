import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOneListTwoComponent } from './card-one-list.component';

describe('CardOneListTwoComponent', () => {
  let component: CardOneListTwoComponent;
  let fixture: ComponentFixture<CardOneListTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardOneListTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOneListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
