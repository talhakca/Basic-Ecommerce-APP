import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderChatOneComponent } from './chat-one.component';

describe('RappiderChatOneComponent', () => {
  let component: RappiderChatOneComponent;
  let fixture: ComponentFixture<RappiderChatOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RappiderChatOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderChatOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
