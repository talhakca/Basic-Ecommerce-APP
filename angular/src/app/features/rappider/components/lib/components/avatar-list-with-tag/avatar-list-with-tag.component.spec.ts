import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderAvatarListWithTagComponent } from './avatar-list-with-tag.component';

describe('RappiderAvatarListWithTagComponent', () => {
  let component: RappiderAvatarListWithTagComponent;
  let fixture: ComponentFixture<RappiderAvatarListWithTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderAvatarListWithTagComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAvatarListWithTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
