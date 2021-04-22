import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallGamePageComponent } from './ball-game-page.component';

describe('BallGamePageComponent', () => {
  let component: BallGamePageComponent;
  let fixture: ComponentFixture<BallGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallGamePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
