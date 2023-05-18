import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTagComponent } from './tag.component';

describe('RappiderTagComponent', () => {
  let component: RappiderTagComponent;
  let fixture: ComponentFixture<RappiderTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTagComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
