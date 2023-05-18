import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderUploadFileComponent } from './upload-file.component';

describe('RappiderUploadFileComponent', () => {
  let component: RappiderUploadFileComponent;
  let fixture: ComponentFixture<RappiderUploadFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderUploadFileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
