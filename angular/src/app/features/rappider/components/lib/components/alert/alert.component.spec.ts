import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RappiderAlertComponent } from './alert.component';

describe('RappiderAlertComponent', () => {
  let component: RappiderAlertComponent;
  let fixture: ComponentFixture<RappiderAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderAlertComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
