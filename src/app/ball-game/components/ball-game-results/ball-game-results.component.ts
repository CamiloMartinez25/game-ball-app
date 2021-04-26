import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BetResultsModel } from 'src/app/core/models/bet.model';

@Component({
  selector: 'app-ball-game-results',
  templateUrl: './ball-game-results.component.html',
  styleUrls: ['./ball-game-results.component.scss']
})
export class BallGameResultsComponent {
  @Input() public currentGameBallResult: BetResultsModel;
  @Output() public reloadGame: EventEmitter<void>;

  get isWinner(): boolean {
    return this.currentGameBallResult?.isWinner;
  }

  constructor() {
    this.reloadGame = new EventEmitter();
  }

  playAgain(): void {
    this.reloadGame.emit();
  }

}
