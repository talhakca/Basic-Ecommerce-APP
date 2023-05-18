import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderButtonListComponent } from './button-list.component';

describe('ButtonListComponent', () => {
  let component: RappiderButtonListComponent;
  let fixture: ComponentFixture<RappiderButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderButtonListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
