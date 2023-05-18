import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderPageWrapperComponent } from './page-wrapper.component';

describe('RappiderPageWrapperComponent', () => {
  let component: RappiderPageWrapperComponent;
  let fixture: ComponentFixture<RappiderPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderPageWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
