import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGridDataInputComponent } from './list-grid-data-input.component';

describe('ListGridDataInputComponent', () => {
  let component: ListGridDataInputComponent;
  let fixture: ComponentFixture<ListGridDataInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListGridDataInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGridDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
