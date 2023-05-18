import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardTenComponent } from './card-ten.component';

describe('RappiderCardTenComponent', () => {
  let component: RappiderCardTenComponent;
  let fixture: ComponentFixture<RappiderCardTenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardTenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
