import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallGameFooterComponent } from './ball-game-footer.component';

describe('BallGameFooterComponent', () => {
  let component: BallGameFooterComponent;
  let fixture: ComponentFixture<BallGameFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallGameFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallGameFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
