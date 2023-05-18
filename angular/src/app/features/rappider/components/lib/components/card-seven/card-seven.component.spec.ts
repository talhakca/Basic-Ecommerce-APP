import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCardSevenComponent } from './card-seven.component';

describe('RappiderCardSevenComponent', () => {
  let component: RappiderCardSevenComponent;
  let fixture: ComponentFixture<RappiderCardSevenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCardSevenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCardSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
