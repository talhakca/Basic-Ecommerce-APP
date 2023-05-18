import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderBlockquoteComponent } from './blockquote.component';

describe('RappiderBlockquoteComponent', () => {
  let component: RappiderBlockquoteComponent;
  let fixture: ComponentFixture<RappiderBlockquoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderBlockquoteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderBlockquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
