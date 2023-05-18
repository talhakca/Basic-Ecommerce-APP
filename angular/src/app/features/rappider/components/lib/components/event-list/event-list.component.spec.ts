import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderEventListComponent } from './event-list.component';

describe('RappiderEventListComponent', () => {
  let component: RappiderEventListComponent;
  let fixture: ComponentFixture<RappiderEventListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderEventListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
