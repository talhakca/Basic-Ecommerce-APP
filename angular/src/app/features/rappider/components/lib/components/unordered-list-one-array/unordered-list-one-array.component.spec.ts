import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderUnorderedListOneArrayComponent } from './unordered-list-one-array.component';

describe('UnorderedListOneArrayComponent', () => {
  let component: RappiderUnorderedListOneArrayComponent;
  let fixture: ComponentFixture<RappiderUnorderedListOneArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderUnorderedListOneArrayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderUnorderedListOneArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
