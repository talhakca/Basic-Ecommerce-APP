import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTitleToolbarComponent } from './title-toolbar.component';

describe('RappiderTitleToolbarComponent', () => {
  let component: RappiderTitleToolbarComponent;
  let fixture: ComponentFixture<RappiderTitleToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderTitleToolbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTitleToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
