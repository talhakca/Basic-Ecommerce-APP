import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderProductComponent } from './product.component';

describe('RappiderProductComponent', () => {
  let component: RappiderProductComponent;
  let fixture: ComponentFixture<RappiderProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderProductComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
