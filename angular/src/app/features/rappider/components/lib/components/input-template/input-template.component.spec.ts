import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderInputTemplateComponent } from './input-template.component';

describe('RappiderInputTemplateComponent', () => {
  let component: RappiderInputTemplateComponent;
  let fixture: ComponentFixture<RappiderInputTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderInputTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderInputTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
