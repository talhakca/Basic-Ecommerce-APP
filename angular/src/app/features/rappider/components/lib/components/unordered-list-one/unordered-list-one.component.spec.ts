import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderUnorderedListOneComponent } from './unordered-list-one.component';

describe('UnorderedListOneComponent', () => {
  let component: RappiderUnorderedListOneComponent;
  let fixture: ComponentFixture<RappiderUnorderedListOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderUnorderedListOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderUnorderedListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
