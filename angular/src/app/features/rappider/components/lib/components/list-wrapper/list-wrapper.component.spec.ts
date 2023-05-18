import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderListWrapperComponent } from './list-wrapper.component';

describe('RappiderListWrapperComponent', () => {
  let component: RappiderListWrapperComponent;
  let fixture: ComponentFixture<RappiderListWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderListWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
