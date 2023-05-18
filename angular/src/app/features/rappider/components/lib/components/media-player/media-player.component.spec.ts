import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderMediaPlayerComponent } from './media-player.component';

describe('RappiderMediaPlayerComponent', () => {
  let component: RappiderMediaPlayerComponent;
  let fixture: ComponentFixture<RappiderMediaPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderMediaPlayerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderMediaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
