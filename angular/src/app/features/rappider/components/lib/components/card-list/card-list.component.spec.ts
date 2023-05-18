import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardListComponent } from './card-list.component';

describe('RappiderCardListComponent', () => {
  let component: RappiderCardListComponent;
  let fixture: ComponentFixture<RappiderCardListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
