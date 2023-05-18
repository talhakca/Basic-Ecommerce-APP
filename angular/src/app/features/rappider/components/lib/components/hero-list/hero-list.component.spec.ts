import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderHeroListComponent } from './hero-list.component';

describe('HeroListComponent', () => {
  let component: RappiderHeroListComponent;
  let fixture: ComponentFixture<RappiderHeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderHeroListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
