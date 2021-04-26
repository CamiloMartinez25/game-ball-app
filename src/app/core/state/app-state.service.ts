import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BetResultsModel } from '../models/bet.model';
import { StateModel } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private currentSelectedBallSubject$: BehaviorSubject<number>;
  private formStateSubject$: BehaviorSubject<boolean>;
  private currentGameBallResultSubject$: BehaviorSubject<BetResultsModel>;


  get currentSelectedBall() { return this.stateFactory(this.currentSelectedBallSubject$); }
  get formState() { return this.stateFactory(this.formStateSubject$); }
  get currentGameBallResult() { return this.stateFactory(this.currentGameBallResultSubject$); }

  constructor() {
    this.currentSelectedBallSubject$ = new BehaviorSubject(null);
    this.formStateSubject$ = new BehaviorSubject(null);
    this.currentGameBallResultSubject$ = new BehaviorSubject(null);
  }

  private stateFactory<T>(subject$: BehaviorSubject<T>): StateModel<T> {
    return {
      $: () => subject$.asObservable(),
      snapshot: () => this.copyPayload(subject$.getValue()),
      set: (payload: T) => subject$.next(this.copyPayload(payload)),
    };
  }

  private copyPayload<T>(payload: T): T {
    return JSON.parse(JSON.stringify(payload)) as T;
  }
}
