import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderHeadingComponent } from './heading.component';

describe('HComponent', () => {
  let component: RappiderHeadingComponent;
  let fixture: ComponentFixture<RappiderHeadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderHeadingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
