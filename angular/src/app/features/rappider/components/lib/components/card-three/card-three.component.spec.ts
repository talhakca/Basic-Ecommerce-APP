import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardThreeComponent } from './card-three.component';

describe('RappiderCardThreeComponent', () => {
  let component: RappiderCardThreeComponent;
  let fixture: ComponentFixture<RappiderCardThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardThreeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
