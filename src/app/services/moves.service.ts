import { Injectable } from '@angular/core';
import { Moves } from '../interfaces/moves';

@Injectable({
  providedIn: 'root'
})
export class MovesService {

  constructor() { }

  moves: Moves[] = [
    { id: 1, season: 2011, moves: 29 },
    { id: 2, season: 2011, moves: 20 },
    { id: 3, season: 2011, moves: 19 },
    { id: 4, season: 2011, moves: 11 },
    { id: 5, season: 2011, moves: 12 },
    { id: 6, season: 2011, moves: 6 },
    { id: 7, season: 2011, moves: 29 },
    { id: 8, season: 2011, moves: 22 },
    { id: 9, season: 2011, moves: 0 },
    { id: 10, season: 2011, moves: 14 },
    { id: 11, season: 2011, moves: 17 },
    { id: 12, season: 2011, moves: 1 },
    { id: 1, season: 2012, moves: 20 },
    { id: 2, season: 2012, moves: 26 },
    { id: 3, season: 2012, moves: 11 },
    { id: 4, season: 2012, moves: 9 },
    { id: 5, season: 2012, moves: 7 },
    { id: 6, season: 2012, moves: 6 },
    { id: 7, season: 2012, moves: 23 },
    { id: 8, season: 2012, moves: 19 },
    { id: 10, season: 2012, moves: 25 },
    { id: 11, season: 2012, moves: 8 },
    { id: 13, season: 2012, moves: 16 },
    { id: 14, season: 2012, moves: 23 },
    { id: 1, season: 2013, moves: 24 },
    { id: 2, season: 2013, moves: 18 },
    { id: 3, season: 2013, moves: 22 },
    { id: 4, season: 2013, moves: 28 },
    { id: 5, season: 2013, moves: 9 },
    { id: 6, season: 2013, moves: 18 },
    { id: 8, season: 2013, moves: 30 },
    { id: 10, season: 2013, moves: 23 },
    { id: 11, season: 2013, moves: 21 },
    { id: 13, season: 2013, moves: 21 },
    { id: 14, season: 2013, moves: 20 },
    { id: 15, season: 2013, moves: 8 },
    { id: 1, season: 2014, moves: 37 },
    { id: 2, season: 2014, moves: 22 },
    { id: 3, season: 2014, moves: 29 },
    { id: 4, season: 2014, moves: 27 },
    { id: 5, season: 2014, moves: 13 },
    { id: 6, season: 2014, moves: 31 },
    { id: 8, season: 2014, moves: 40 },
    { id: 10, season: 2014, moves: 29 },
    { id: 11, season: 2014, moves: 24 },
    { id: 14, season: 2014, moves: 16 },
    { id: 16, season: 2014, moves: 8 },
    { id: 17, season: 2014, moves: 33 },
    { id: 1, season: 2015, moves: 34 },
    { id: 2, season: 2015, moves: 21 },
    { id: 3, season: 2015, moves: 22 },
    { id: 4, season: 2015, moves: 14 },
    { id: 5, season: 2015, moves: 24 },
    { id: 6, season: 2015, moves: 18 },
    { id: 8, season: 2015, moves: 24 },
    { id: 10, season: 2015, moves: 35 },
    { id: 11, season: 2015, moves: 35 },
    { id: 17, season: 2015, moves: 33 },
    { id: 18, season: 2015, moves: 19 },
    { id: 19, season: 2015, moves: 19 },
    { id: 1, season: 2016, moves: 30 },
    { id: 2, season: 2016, moves: 15 },
    { id: 3, season: 2016, moves: 29 },
    { id: 4, season: 2016, moves: 34 },
    { id: 5, season: 2016, moves: 22 },
    { id: 6, season: 2016, moves: 15 },
    { id: 8, season: 2016, moves: 21 },
    { id: 10, season: 2016, moves: 29 },
    { id: 11, season: 2016, moves: 12 },
    { id: 17, season: 2016, moves: 45 },
    { id: 18, season: 2016, moves: 21 },
    { id: 19, season: 2016, moves: 9 },
    { id: 1, season: 2017, moves: 44 },
    { id: 2, season: 2017, moves: 17 },
    { id: 3, season: 2017, moves: 23 },
    { id: 4, season: 2017, moves: 22 },
    { id: 5, season: 2017, moves: 27 },
    { id: 6, season: 2017, moves: 24 },
    { id: 8, season: 2017, moves: 15 },
    { id: 10, season: 2017, moves: 24 },
    { id: 11, season: 2017, moves: 15 },
    { id: 17, season: 2017, moves: 18 },
    { id: 18, season: 2017, moves: 25 },
    { id: 19, season: 2017, moves: 7 },
    { id: 1, season: 2018, moves: 33 },
    { id: 2, season: 2018, moves: 16 },
    { id: 3, season: 2018, moves: 17 },
    { id: 4, season: 2018, moves: 25 },
    { id: 5, season: 2018, moves: 31 },
    { id: 6, season: 2018, moves: 42 },
    { id: 8, season: 2018, moves: 16 },
    { id: 10, season: 2018, moves: 17 },
    { id: 11, season: 2018, moves: 16 },
    { id: 17, season: 2018, moves: 19 },
    { id: 18, season: 2018, moves: 15 },
    { id: 19, season: 2018, moves: 11 },
    { id: 1, season: 2019, moves: 25 },
    { id: 2, season: 2019, moves: 9 },
    { id: 3, season: 2019, moves: 37 },
    { id: 4, season: 2019, moves: 11 },
    { id: 5, season: 2019, moves: 34 },
    { id: 6, season: 2019, moves: 29 },
    { id: 8, season: 2019, moves: 29 },
    { id: 10, season: 2019, moves: 17 },
    { id: 11, season: 2019, moves: 19 },
    { id: 17, season: 2019, moves: 23 },
    { id: 18, season: 2019, moves: 13 },
    { id: 19, season: 2019, moves: 9 },
    { id: 1, season: 2020, moves: 21 },
    { id: 2, season: 2020, moves: 15 },
    { id: 3, season: 2020, moves: 16 },
    { id: 4, season: 2020, moves: 16 },
    { id: 5, season: 2020, moves: 35 },
    { id: 6, season: 2020, moves: 25 },
    { id: 8, season: 2020, moves: 23 },
    { id: 10, season: 2020, moves: 30 },
    { id: 11, season: 2020, moves: 19 },
    { id: 17, season: 2020, moves: 29 },
    { id: 18, season: 2020, moves: 9 },
    { id: 19, season: 2020, moves: 12 },
    { id: 1, season: 2021, moves: 18 },
    { id: 2, season: 2021, moves: 14 },
    { id: 3, season: 2021, moves: 22 },
    { id: 4, season: 2021, moves: 4 },
    { id: 5, season: 2021, moves: 10 },
    { id: 11, season: 2021, moves: 9 },
    { id: 17, season: 2021, moves: 14 },
    { id: 18, season: 2021, moves: 8 }
  ];

  getAllManagerMovesCount(): Moves[] {
    return this.moves;
  }

  getMovesByManagerBySeason(id: number, season: number): number {
    return this.moves.filter(x => x.id == id && x.season == season)[0] ? this.moves.filter(x => x.id == id && x.season == season)[0].moves : 0;
  }
}
