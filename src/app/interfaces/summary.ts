export interface Summary {
  id: number;
  season: number;
  totalPoints: number;
  totalAgainst: number;
  wins: number;
  losses: number;
  moves: number;
  draft: number;
  champion: boolean;
}

export interface Extra {
  wins: number;
  losses: number;
}
