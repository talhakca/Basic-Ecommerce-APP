import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsStatusComponent } from './comments-status.component';

describe('CommentsStatusComponent', () => {
  let component: CommentsStatusComponent;
  let fixture: ComponentFixture<CommentsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
