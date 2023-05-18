import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderIconAndMenuListComponent } from './icon-and-menu-list.component';

describe('RappiderIconAndMenuListComponent', () => {
  let component: RappiderIconAndMenuListComponent;
  let fixture: ComponentFixture<RappiderIconAndMenuListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderIconAndMenuListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderIconAndMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
