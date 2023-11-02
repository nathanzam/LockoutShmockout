export interface Result {
  season: number;
  winnerId: number;
  loserId: number;
  winningScore: number;
  losingScore: number;
  weekNumber: number;
}

export interface ResultNames {
  season: number;
  winnerName: string;
  loserName: string;
  winningScore: number;
  losingScore: number;
  weekNumber: number;
  winnerId: number;
}

export interface AltResult {
  season: number;
  winnerId: number;
  loserId: number;
  winningScore: number;
  losingScore: number;
  weekNumber: number;
  topHalf: boolean;
}
