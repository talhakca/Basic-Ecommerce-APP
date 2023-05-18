import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderAutoCompleteComponent } from './auto-complete.component';

describe('AutoCompleteComponent', () => {
  let component: RappiderAutoCompleteComponent;
  let fixture: ComponentFixture<RappiderAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderAutoCompleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
