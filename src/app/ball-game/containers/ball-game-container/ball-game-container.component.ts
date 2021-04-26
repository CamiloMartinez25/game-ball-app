import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BetModel, BetResultsModel } from 'src/app/core/models/bet.model';
import { BallGameFacadeService } from '../../facades/ball-game-facade.service';

@Component({
  selector: 'app-ball-game-container',
  templateUrl: './ball-game-container.component.html',
  styleUrls: ['./ball-game-container.component.scss']
})
export class BallGameContainerComponent implements OnInit {
  public currentSelectedBall$: Observable<number>;
  public formState$: Observable<boolean>;
  public currentGameBallResult$: Observable<BetResultsModel>;

  constructor(
    private ballGameFacade: BallGameFacadeService
  ) { }

  ngOnInit(): void {
    this.initializeSubscriptions();
  }

  handleSelectedNumber(number: number): void {
    this.ballGameFacade.handleSelectedNumber(number);
  }

  handleBetForm(betData: BetModel): void {
    this.ballGameFacade.letsPlay(betData);
  }

  handleReload(): void {
    this.ballGameFacade.destroy();
  }

  private initializeSubscriptions(): void {
    this.currentSelectedBall$ = this.ballGameFacade.selectedBall$();
    this.formState$ = this.ballGameFacade.formState$();
    this.currentGameBallResult$ = this.ballGameFacade.currentGameBallResult$();
  }

}
