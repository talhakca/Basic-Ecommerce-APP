import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderAvatarComponent } from './avatar.component';

describe('RappiderAvatarComponent', () => {
  let component: RappiderAvatarComponent;
  let fixture: ComponentFixture<RappiderAvatarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderAvatarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
