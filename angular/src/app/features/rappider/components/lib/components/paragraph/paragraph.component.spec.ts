import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderParagraphComponent } from './paragraph.component';

describe('RappiderParagraphComponent', () => {
  let component: RappiderParagraphComponent;
  let fixture: ComponentFixture<RappiderParagraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderParagraphComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
