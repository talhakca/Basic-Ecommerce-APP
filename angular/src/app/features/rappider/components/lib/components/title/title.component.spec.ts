import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTitleComponent } from './title.component';

describe('RappiderTitleComponent', () => {
  let component: RappiderTitleComponent;
  let fixture: ComponentFixture<RappiderTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTitleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
