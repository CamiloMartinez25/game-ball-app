import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BallGameResultsComponent } from './ball-game-results.component';

describe('BallGameResultsComponent', () => {
  let component: BallGameResultsComponent;
  let fixture: ComponentFixture<BallGameResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallGameResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallGameResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On PlayAgain Function, reloadGame must emit event', () => {
    spyOn(component.reloadGame, 'emit');
    component.playAgain();
    fixture.detectChanges();
    expect(component.reloadGame.emit).toHaveBeenCalledWith();
  })

});
