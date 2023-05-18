import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderGridContainerComponent } from './grid-container.component';

describe('RappiderGridContainerComponent', () => {
  let component: RappiderGridContainerComponent;
  let fixture: ComponentFixture<RappiderGridContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderGridContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
