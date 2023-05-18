import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardsComponent } from './cards.component';

describe('PageTemplateWithSearchComponent', () => {
  let component: RappiderCardsComponent;
  let fixture: ComponentFixture<RappiderCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCardsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
