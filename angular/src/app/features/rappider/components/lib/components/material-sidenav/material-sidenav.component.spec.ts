import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderMaterialSidenavComponent } from './material-sidenav.component';

describe('RappiderMaterialSidenavComponent', () => {
  let component: RappiderMaterialSidenavComponent;
  let fixture: ComponentFixture<RappiderMaterialSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderMaterialSidenavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderMaterialSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
