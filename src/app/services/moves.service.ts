import { Injectable } from '@angular/core';
import { Moves, Draft } from '../interfaces/moves';

@Injectable({
  providedIn: 'root'
})
export class MovesService {

  constructor() { }

  moves: Moves[] = [
    { id: 1, season: 2011, moves: 29, draft: 5 },
    { id: 2, season: 2011, moves: 20, draft: 11 },
    { id: 3, season: 2011, moves: 19, draft: 12 },
    { id: 4, season: 2011, moves: 11, draft: 10 },
    { id: 5, season: 2011, moves: 12, draft: 9 },
    { id: 6, season: 2011, moves: 6, draft: 2 },
    { id: 7, season: 2011, moves: 29, draft: 3 },
    { id: 8, season: 2011, moves: 22, draft: 1 },
    { id: 9, season: 2011, moves: 0, draft: 7 },
    { id: 10, season: 2011, moves: 14, draft: 8 },
    { id: 11, season: 2011, moves: 17, draft: 4 },
    { id: 12, season: 2011, moves: 1, draft: 6 },
    { id: 1, season: 2012, moves: 20, draft: 8 },
    { id: 2, season: 2012, moves: 26, draft: 10 },
    { id: 3, season: 2012, moves: 11, draft: 3 },
    { id: 4, season: 2012, moves: 9, draft: 2 },
    { id: 5, season: 2012, moves: 7, draft: 6 },
    { id: 6, season: 2012, moves: 6, draft: 7 },
    { id: 7, season: 2012, moves: 23, draft: 9 },
    { id: 8, season: 2012, moves: 19, draft: 12 },
    { id: 10, season: 2012, moves: 25, draft: 1 },
    { id: 11, season: 2012, moves: 8, draft: 11 },
    { id: 13, season: 2012, moves: 16, draft: 4 },
    { id: 14, season: 2012, moves: 23, draft: 5 },
    { id: 1, season: 2013, moves: 24, draft: 3 },
    { id: 2, season: 2013, moves: 18, draft: 1 },
    { id: 3, season: 2013, moves: 22, draft: 11 },
    { id: 4, season: 2013, moves: 28, draft: 9 },
    { id: 5, season: 2013, moves: 9, draft: 2 },
    { id: 6, season: 2013, moves: 18, draft: 6 },
    { id: 8, season: 2013, moves: 30, draft: 5 },
    { id: 10, season: 2013, moves: 23, draft: 12 },
    { id: 11, season: 2013, moves: 21, draft: 4 },
    { id: 13, season: 2013, moves: 21, draft: 8 },
    { id: 14, season: 2013, moves: 20, draft: 10 },
    { id: 15, season: 2013, moves: 8, draft: 7 },
    { id: 1, season: 2014, moves: 37, draft: 8 },
    { id: 2, season: 2014, moves: 22, draft: 1 },
    { id: 3, season: 2014, moves: 29, draft: 4 },
    { id: 4, season: 2014, moves: 27, draft: 9 },
    { id: 5, season: 2014, moves: 13, draft: 3 },
    { id: 6, season: 2014, moves: 31, draft: 11 },
    { id: 8, season: 2014, moves: 40, draft: 5 },
    { id: 10, season: 2014, moves: 29, draft: 2 },
    { id: 11, season: 2014, moves: 24, draft: 6 },
    { id: 14, season: 2014, moves: 16, draft: 7 },
    { id: 16, season: 2014, moves: 8, draft: 12 },
    { id: 17, season: 2014, moves: 33, draft: 10 },
    { id: 1, season: 2015, moves: 34, draft: 8 },
    { id: 2, season: 2015, moves: 21, draft: 6 },
    { id: 3, season: 2015, moves: 22, draft: 2 },
    { id: 4, season: 2015, moves: 14, draft: 3 },
    { id: 5, season: 2015, moves: 24, draft: 1 },
    { id: 6, season: 2015, moves: 18, draft: 5 },
    { id: 8, season: 2015, moves: 24, draft: 7 },
    { id: 10, season: 2015, moves: 35, draft: 9 },
    { id: 11, season: 2015, moves: 35, draft: 10 },
    { id: 17, season: 2015, moves: 33, draft: 4 },
    { id: 18, season: 2015, moves: 19, draft: 12 },
    { id: 19, season: 2015, moves: 19, draft: 11 },
    { id: 1, season: 2016, moves: 30, draft: 3 },
    { id: 2, season: 2016, moves: 15, draft: 10 },
    { id: 3, season: 2016, moves: 29, draft: 2 },
    { id: 4, season: 2016, moves: 34, draft: 5 },
    { id: 5, season: 2016, moves: 22, draft: 7 },
    { id: 6, season: 2016, moves: 15, draft: 11 },
    { id: 8, season: 2016, moves: 21, draft: 9 },
    { id: 10, season: 2016, moves: 29, draft: 12 },
    { id: 11, season: 2016, moves: 12, draft: 8 },
    { id: 17, season: 2016, moves: 45, draft: 1 },
    { id: 18, season: 2016, moves: 21, draft: 4 },
    { id: 19, season: 2016, moves: 9, draft: 6 },
    { id: 1, season: 2017, moves: 44, draft: 1 },
    { id: 2, season: 2017, moves: 17, draft: 6 },
    { id: 3, season: 2017, moves: 23, draft: 4 },
    { id: 4, season: 2017, moves: 22, draft: 11 },
    { id: 5, season: 2017, moves: 27, draft: 7 },
    { id: 6, season: 2017, moves: 24, draft: 12 },
    { id: 8, season: 2017, moves: 15, draft: 10 },
    { id: 10, season: 2017, moves: 24, draft: 2 },
    { id: 11, season: 2017, moves: 15, draft: 8 },
    { id: 17, season: 2017, moves: 18, draft: 3 },
    { id: 18, season: 2017, moves: 25, draft: 9 },
    { id: 19, season: 2017, moves: 7, draft: 5 },
    { id: 1, season: 2018, moves: 33, draft: 6 },
    { id: 2, season: 2018, moves: 16, draft: 11 },
    { id: 3, season: 2018, moves: 17, draft: 9 },
    { id: 4, season: 2018, moves: 25, draft: 7 },
    { id: 5, season: 2018, moves: 31, draft: 3 },
    { id: 6, season: 2018, moves: 42, draft: 8 },
    { id: 8, season: 2018, moves: 16, draft: 12 },
    { id: 10, season: 2018, moves: 17, draft: 2 },
    { id: 11, season: 2018, moves: 16, draft: 10 },
    { id: 17, season: 2018, moves: 19, draft: 4 },
    { id: 18, season: 2018, moves: 15, draft: 5 },
    { id: 19, season: 2018, moves: 11, draft: 1 },
    { id: 1, season: 2019, moves: 25, draft: 1 },
    { id: 2, season: 2019, moves: 9, draft: 10 },
    { id: 3, season: 2019, moves: 37, draft: 11 },
    { id: 4, season: 2019, moves: 11, draft: 9 },
    { id: 5, season: 2019, moves: 34, draft: 7 },
    { id: 6, season: 2019, moves: 29, draft: 4 },
    { id: 8, season: 2019, moves: 29, draft: 2 },
    { id: 10, season: 2019, moves: 17, draft: 3 },
    { id: 11, season: 2019, moves: 19, draft: 5 },
    { id: 17, season: 2019, moves: 23, draft: 8 },
    { id: 18, season: 2019, moves: 13, draft: 6 },
    { id: 19, season: 2019, moves: 9, draft: 12 },
    { id: 1, season: 2020, moves: 21, draft: 6 },
    { id: 2, season: 2020, moves: 15, draft: 9 },
    { id: 3, season: 2020, moves: 16, draft: 11 },
    { id: 4, season: 2020, moves: 16, draft: 8 },
    { id: 5, season: 2020, moves: 35, draft: 10 },
    { id: 6, season: 2020, moves: 25, draft: 12 },
    { id: 8, season: 2020, moves: 23, draft: 5 },
    { id: 10, season: 2020, moves: 30, draft: 2 },
    { id: 11, season: 2020, moves: 19, draft: 1 },
    { id: 17, season: 2020, moves: 29, draft: 7 },
    { id: 18, season: 2020, moves: 9, draft: 4 },
    { id: 19, season: 2020, moves: 12, draft: 3 },
    { id: 1, season: 2021, moves: 29, draft: 8 },
    { id: 2, season: 2021, moves: 21, draft: 6 },
    { id: 3, season: 2021, moves: 39, draft: 4 },
    { id: 4, season: 2021, moves: 7, draft: 3 },
    { id: 5, season: 2021, moves: 27, draft: 1 },
    { id: 11, season: 2021, moves: 20, draft: 7 },
    { id: 17, season: 2021, moves: 31, draft: 5 },
    { id: 18, season: 2021, moves: 12, draft: 2 },
    { id: 1, season: 2022, moves: 22, draft: 3 },
    { id: 2, season: 2022, moves: 19, draft: 6 },
    { id: 3, season: 2022, moves: 21, draft: 1 },
    { id: 4, season: 2022, moves: 11, draft: 2 },
    { id: 5, season: 2022, moves: 16, draft: 4 },
    { id: 11, season: 2022, moves: 22, draft: 5 },
    { id: 17, season: 2022, moves: 23, draft: 7 },
    { id: 18, season: 2022, moves: 11, draft: 8 },
    { id: 1, season: 2023, moves: 15, draft: 7 },
    { id: 2, season: 2023, moves: 8, draft: 8 },
    { id: 3, season: 2023, moves: 13, draft: 6 },
    { id: 4, season: 2023, moves: 8, draft: 3 },
    { id: 5, season: 2023, moves: 6, draft: 1 },
    { id: 11, season: 2023, moves: 13, draft: 4 },
    { id: 17, season: 2023, moves: 21, draft: 2 },
    { id: 18, season: 2023, moves: 5, draft: 5 }
  ];

  getAllManagerMovesCount(): Moves[] {
    return this.moves;
  }

  getMovesByManagerBySeason(id: number, season: number): number {
    return this.moves.filter(x => x.id == id && x.season == season)[0] ? this.moves.filter(x => x.id == id && x.season == season)[0].moves : 0;
  }

  getDraftSpotByManagerBySeason(id: number, season: number): number {
    return this.moves.filter(x => x.id == id && x.season == season)[0] ? this.moves.filter(x => x.id == id && x.season == season)[0].draft : 100;
  }

  getAllDraftsByManagerId(managerId: number): Draft[] {
    let drafts: Draft[] = [];
    var info = this.moves.filter(info => info.id == managerId);
    info.forEach(x => {
      let draft: Draft = { season: x.season, draft: x.draft };
      drafts.push(draft);
    })
    return drafts;
  }
}
