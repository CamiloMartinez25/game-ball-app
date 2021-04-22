import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallGameRoomsComponent } from './ball-game-rooms.component';

describe('BallGameRoomsComponent', () => {
  let component: BallGameRoomsComponent;
  let fixture: ComponentFixture<BallGameRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallGameRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallGameRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
