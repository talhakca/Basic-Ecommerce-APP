import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderUserBlockComponent } from './user-block.component';

describe('RappiderUserBlockComponent', () => {
  let component: RappiderUserBlockComponent;
  let fixture: ComponentFixture<RappiderUserBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderUserBlockComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderUserBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
