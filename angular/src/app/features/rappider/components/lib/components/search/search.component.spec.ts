import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderSearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: RappiderSearchComponent;
  let fixture: ComponentFixture<RappiderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
