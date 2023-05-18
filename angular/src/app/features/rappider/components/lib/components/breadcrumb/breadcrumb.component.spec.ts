import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderBreadcrumbComponent } from './breadcrumb.component';

describe('RappiderBreadcrumbComponent', () => {
  let component: RappiderBreadcrumbComponent;
  let fixture: ComponentFixture<RappiderBreadcrumbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderBreadcrumbComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
