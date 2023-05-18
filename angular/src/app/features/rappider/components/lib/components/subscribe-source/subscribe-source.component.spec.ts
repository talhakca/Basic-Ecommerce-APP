import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderSubscribeSourceComponent } from './subscribe-source.component';

describe('RappiderSubscribeSourceComponent', () => {
  let component: RappiderSubscribeSourceComponent;
  let fixture: ComponentFixture<RappiderSubscribeSourceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderSubscribeSourceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderSubscribeSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
