import { Injectable } from '@angular/core';
import { PrizeRates } from '../constants/prize-rate.const';
import { BetModel, BetResultsModel } from '../models/bet.model';

@Injectable({
  providedIn: 'root'
})
export class ApiToGameBallResultsMapperService {

  constructor() { }

  map(winnerNumber: number, betData: BetModel): BetResultsModel {
    return {
      ...betData,
      winnerNumber,
      isWinner: betData?.number === winnerNumber,
      winnerAmount: betData?.number === winnerNumber ? betData.amount * PrizeRates.gameBallApp : 0
    }
  }
}
