import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderAccordionComponent } from './accordion.component';

describe('RappiderAccordionComponent', () => {
  let component: RappiderAccordionComponent;
  let fixture: ComponentFixture<RappiderAccordionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderAccordionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
