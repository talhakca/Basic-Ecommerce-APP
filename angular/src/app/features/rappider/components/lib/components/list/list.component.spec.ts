import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderListComponent } from './list.component';

describe('RappiderListComponent', () => {
  let component: RappiderListComponent;
  let fixture: ComponentFixture<RappiderListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
