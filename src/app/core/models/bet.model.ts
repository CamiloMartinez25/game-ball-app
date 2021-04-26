export interface BetModel {
    number: number;
    amount: number;
}

export interface BetResultsModel extends BetModel {
    winnerNumber: number;
    isWinner: boolean;
    winnerAmount: number;
}