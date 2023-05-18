import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderTeamBlockComponent } from './team-block.component';

describe('RappiderTeamBlockComponent', () => {
  let component: RappiderTeamBlockComponent;
  let fixture: ComponentFixture<RappiderTeamBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderTeamBlockComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderTeamBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
