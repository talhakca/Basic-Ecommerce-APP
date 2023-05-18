import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardOneListComponent } from './card-one-list.component';

describe('RappiderCardOneListComponent', () => {
  let component: RappiderCardOneListComponent;
  let fixture: ComponentFixture<RappiderCardOneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderCardOneListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardOneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
