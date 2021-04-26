import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiToGameBallResultsMapperService } from '../mapper/api-to-game-ball-results-mapper.service';
import { BetModel, BetResultsModel } from '../models/bet.model';
import { UrlParams } from '../resources/urlParams';
import { UrlResources } from '../resources/urlResources';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BetPlaysService {

  constructor(
    private httpService: HttpService,
    private apiToGameBallResultsMapper: ApiToGameBallResultsMapperService
  ) { }

  letsPlayGameBall(betData: BetModel): Observable<BetResultsModel> {
    return this.getWinnerNumber().pipe(
      map((winnerNumber) => this.apiToGameBallResultsMapper.map(winnerNumber, betData))
    )
  }

  private getWinnerNumber(): Observable<number> {
      const params = UrlParams.randomNumberApi as unknown as HttpParams;
      const url = UrlResources.randomNumber;
      return this.httpService.get(url, params);
  }
}
