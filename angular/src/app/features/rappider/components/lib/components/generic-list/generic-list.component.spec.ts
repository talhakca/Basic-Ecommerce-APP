import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderGenericListComponent } from './generic-list.component';

describe('RappiderGenericListComponent', () => {
  let component: RappiderGenericListComponent;
  let fixture: ComponentFixture<RappiderGenericListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderGenericListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderGenericListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
