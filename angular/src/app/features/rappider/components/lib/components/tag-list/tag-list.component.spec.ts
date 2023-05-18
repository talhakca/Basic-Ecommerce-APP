import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTagListComponent } from './tag-list.component';

describe('TagListComponent', () => {
  let component: RappiderTagListComponent;
  let fixture: ComponentFixture<RappiderTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderTagListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
