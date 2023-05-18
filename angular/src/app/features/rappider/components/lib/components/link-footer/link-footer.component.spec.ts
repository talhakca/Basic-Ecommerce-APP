import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderLinkFooterComponent } from './link-footer.component';

describe('RappiderLinkFooterComponent', () => {
  let component: RappiderLinkFooterComponent;
  let fixture: ComponentFixture<RappiderLinkFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderLinkFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderLinkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
