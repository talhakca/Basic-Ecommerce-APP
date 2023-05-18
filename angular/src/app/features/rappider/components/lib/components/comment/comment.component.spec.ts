import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCommentComponent } from './comment.component';

describe('RappiderCommentComponent', () => {
  let component: RappiderCommentComponent;
  let fixture: ComponentFixture<RappiderCommentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCommentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
