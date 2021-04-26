import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BetModel, BetResultsModel } from 'src/app/core/models/bet.model';
import { BetPlaysService } from 'src/app/core/services/bet-plays.service';
import { AppStateService } from 'src/app/core/state/app-state.service';

@Injectable({
  providedIn: 'root'
})
export class BallGameFacadeService {

  constructor(
    private appState: AppStateService,
    private betPlaysService: BetPlaysService,
  ) { }

  selectedBall$(): Observable<number> {
    return this.appState.currentSelectedBall.$();
  }

  formState$(): Observable<boolean> {
    return this.appState.formState.$();
  }

  currentGameBallResult$(): Observable<BetResultsModel> {
    return this.appState.currentGameBallResult.$();
  }

  handleSelectedNumber(number: number): void {
    this.appState.currentSelectedBall.set(number);
  }

  letsPlay(betData: BetModel): void {
    this.appState.formState.set(true);
    this.betPlaysService.letsPlayGameBall(betData).pipe(
      tap((result) => this.managaPlayResult(result)),
      catchError((e) => this.managePlayError(e))
    ).subscribe()
  }

  destroy(): void {
    this.appState.formState.set(null);
    this.appState.currentSelectedBall.set(null);
    this.appState.currentGameBallResult.set(null);
  }

  private managaPlayResult(result: BetResultsModel): void {
    setTimeout(() => {
      this.appState.currentGameBallResult.set(result)
    }, 3000);
  }

  private managePlayError(e: String): Observable<void> {
    return of();
  }
}
