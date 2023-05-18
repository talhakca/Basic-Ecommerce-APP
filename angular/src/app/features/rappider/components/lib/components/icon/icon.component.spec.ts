import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderIconComponent } from './icon.component';

describe('RappiderIconComponent', () => {
  let component: RappiderIconComponent;
  let fixture: ComponentFixture<RappiderIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
