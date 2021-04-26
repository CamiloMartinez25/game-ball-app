import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BallsNumber } from 'src/app/core/constants/balls-number.const';
import { BetResultsModel } from 'src/app/core/models/bet.model';

@Component({
  selector: 'app-ball-game-rooms',
  templateUrl: './ball-game-rooms.component.html',
  styleUrls: ['./ball-game-rooms.component.scss']
})
export class BallGameRoomsComponent {
  @Input() public currentGameBallResult: BetResultsModel;
  @Input() public formState: boolean;
  @Output() public selectedNumber: EventEmitter<number>;
  public ballsNumbers: typeof BallsNumber

  constructor() {
    this.ballsNumbers = BallsNumber;
    this.selectedNumber = new EventEmitter();
  }

  handleSelectedNumber(number: number): void {
    this.selectedNumber.emit(number);
  }

}
