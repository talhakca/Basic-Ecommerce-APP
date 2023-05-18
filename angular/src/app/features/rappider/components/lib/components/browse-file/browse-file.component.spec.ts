import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderBrowseFileComponent } from './browse-file.component';

describe('RappiderBrowseFileComponent', () => {
  let component: RappiderBrowseFileComponent;
  let fixture: ComponentFixture<RappiderBrowseFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderBrowseFileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderBrowseFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
