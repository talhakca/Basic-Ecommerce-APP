import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTabComponent } from './tab.component';

describe('RappiderTabComponent', () => {
  let component: RappiderTabComponent;
  let fixture: ComponentFixture<RappiderTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTabComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
