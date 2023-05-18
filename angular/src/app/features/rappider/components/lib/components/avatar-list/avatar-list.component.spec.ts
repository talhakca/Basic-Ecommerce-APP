import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderAvatarListComponent } from './avatar-list.component';

describe('RappiderAvatarListComponent', () => {
  let component: RappiderAvatarListComponent;
  let fixture: ComponentFixture<RappiderAvatarListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderAvatarListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAvatarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
