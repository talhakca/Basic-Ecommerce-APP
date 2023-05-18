import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderToolbarComponent } from './toolbar.component';

describe('RappiderToolbarComponent', () => {
  let component: RappiderToolbarComponent;
  let fixture: ComponentFixture<RappiderToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderToolbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
