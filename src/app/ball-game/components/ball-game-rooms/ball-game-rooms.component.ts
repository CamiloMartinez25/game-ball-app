import { Component, OnInit } from '@angular/core';
import { BallsNumber } from 'src/app/core/constants/balls-number.const';

@Component({
  selector: 'app-ball-game-rooms',
  templateUrl: './ball-game-rooms.component.html',
  styleUrls: ['./ball-game-rooms.component.scss']
})
export class BallGameRoomsComponent implements OnInit {
  public ballsNumbers: typeof BallsNumber

  constructor() {
    this.ballsNumbers = BallsNumber;
   }

  ngOnInit(): void {
  }

}
