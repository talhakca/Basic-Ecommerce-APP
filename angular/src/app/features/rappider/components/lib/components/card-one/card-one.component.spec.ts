import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardOneComponent } from './card-one.component';

describe('RappiderCardOneComponent', () => {
  let component: RappiderCardOneComponent;
  let fixture: ComponentFixture<RappiderCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCardOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
