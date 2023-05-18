import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsInputComponent } from './actions-input.component';

describe('ActionsInputComponent', () => {
  let component: ActionsInputComponent;
  let fixture: ComponentFixture<ActionsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionsInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
