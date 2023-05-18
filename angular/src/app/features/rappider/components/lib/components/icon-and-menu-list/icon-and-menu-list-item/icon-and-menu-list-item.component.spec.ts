import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderIconAndMenuListItemComponent } from './icon-and-menu-list-item.component';

describe('RappiderIconAndMenuListItemComponent', () => {
  let component: RappiderIconAndMenuListItemComponent;
  let fixture: ComponentFixture<RappiderIconAndMenuListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderIconAndMenuListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderIconAndMenuListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
