import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTitleBarComponent } from './title-bar.component';

describe('RappiderTitleBarComponent', () => {
  let component: RappiderTitleBarComponent;
  let fixture: ComponentFixture<RappiderTitleBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTitleBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
