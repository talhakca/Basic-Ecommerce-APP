import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderModalComponent } from './modal.component';

describe('RappiderModalComponent', () => {
  let component: RappiderModalComponent;
  let fixture: ComponentFixture<RappiderModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
