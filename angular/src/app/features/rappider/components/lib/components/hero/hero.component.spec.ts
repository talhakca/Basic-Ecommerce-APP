import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderHeroComponent } from './hero.component';

describe('RappiderHeroComponent', () => {
  let component: RappiderHeroComponent;
  let fixture: ComponentFixture<RappiderHeroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderHeroComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
