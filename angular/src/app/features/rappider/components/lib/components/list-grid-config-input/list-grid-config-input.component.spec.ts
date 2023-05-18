import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGridConfigInputComponent } from './list-grid-config-input.component';

describe('ListGridConfigInputComponent', () => {
  let component: ListGridConfigInputComponent;
  let fixture: ComponentFixture<ListGridConfigInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListGridConfigInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGridConfigInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
