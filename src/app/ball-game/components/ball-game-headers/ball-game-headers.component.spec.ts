import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallGameHeadersComponent } from './ball-game-headers.component';

describe('BallGameHeadersComponent', () => {
  let component: BallGameHeadersComponent;
  let fixture: ComponentFixture<BallGameHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallGameHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallGameHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
