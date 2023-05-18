import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardElevenComponent } from './card-eleven.component';

describe('RappiderCardElevenComponent', () => {
  let component: RappiderCardElevenComponent;
  let fixture: ComponentFixture<RappiderCardElevenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardElevenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
