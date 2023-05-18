import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderIconTextComponent } from './icon-text.component';

describe('IconTextComponent', () => {
  let component: RappiderIconTextComponent;
  let fixture: ComponentFixture<RappiderIconTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderIconTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderIconTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
