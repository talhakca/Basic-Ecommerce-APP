import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderProductOneListComponent } from './product-one-list.component';

describe('RappiderProductOneListComponent', () => {
  let component: RappiderProductOneListComponent;
  let fixture: ComponentFixture<RappiderProductOneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderProductOneListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProductOneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
