import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderLoginFormComponent } from './login-form.component';

describe('RappiderLoginFormComponent', () => {
  let component: RappiderLoginFormComponent;
  let fixture: ComponentFixture<RappiderLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderLoginFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
