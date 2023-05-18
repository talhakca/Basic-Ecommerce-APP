import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderNewsBlockComponent } from './news-block.component';

describe('RappiderNewsBlockComponent', () => {
  let component: RappiderNewsBlockComponent;
  let fixture: ComponentFixture<RappiderNewsBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderNewsBlockComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderNewsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
