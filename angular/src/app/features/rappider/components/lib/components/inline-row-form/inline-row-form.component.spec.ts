import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderInlineRowFormComponent } from './inline-row-form.component';

describe('RappiderInlineRowFormComponent', () => {
  let component: RappiderInlineRowFormComponent;
  let fixture: ComponentFixture<RappiderInlineRowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderInlineRowFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderInlineRowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
