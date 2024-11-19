import { Component, OnInit } from '@angular/core';
import { Member } from '../../interfaces/member';
import { Result, AltResult } from '../../interfaces/result';
import { Score } from '../../interfaces/score';
import { Summary, Extra } from '../../interfaces/summary';
import { MemberService } from '../../services/member-service.service';
import { MovesService } from 'src/app/services/moves.service';
import { ResultsService } from '../../services/results.service';
import { ScoreService } from '../../services/score.service';
import { TableModule, Table } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem, SortEvent } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-extra-wins',
  templateUrl: './extra-wins.component.html',
  styleUrls: ['./extra-wins.component.scss']
})
export class ExtraWinsComponent implements OnInit {

  members: Member[] = [];
  results: Result[] = [];
  scores: Score[] = [];
  showRecordWindow: boolean = false;
  weeksCount: number = 0;
  records: AltResult[] = [];
  summaries: Summary[] = [];
  summary: any;
  season: number = 2024;
  seasons: SelectItem[] = [
    { label: '2024', value: 2024 },
    { label: '2023', value: 2023 },
    { label: '2022', value: 2022 },
    { label: '2021', value: 2021 },
    { label: '2020', value: 2020 },
    { label: '2019', value: 2019 },
    { label: '2018', value: 2018 },
    { label: '2017', value: 2017 },
    { label: '2016', value: 2016 },
    { label: '2015', value: 2015 },
    { label: '2014', value: 2014 },
    { label: '2013', value: 2013 },
    { label: '2012', value: 2012 },
    { label: '2011', value: 2011 }
  ];

  constructor(
    private memberService: MemberService,
    private moveService: MovesService,
    private resultService: ResultsService,
    private scoreService: ScoreService) { }
    
  ngOnInit(): void {
    this.members = this.memberService.getMembers();
    this.results = this.resultService.getResults();
    this.scores = this.scoreService.getScores();
    this.members.forEach(member => {
      this.calculateSummary(member.id);
    });
  }

  switchSeason(value: number): void {
    this.season = value;
    this.summaries = [];
    this.members.forEach(member => {
      this.calculateSummary(member.id);
    })
  }

  customSort(event: SortEvent) {
    event.data!.sort((data1, data2) => {
      let value1 = data1[event.field!];
      let value2 = data2[event.field!];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else if (event.field === 'wins' && value1 === value2)
        result = (data1['totalPoints'] < data2['totalPoints']) ? -1 : (data1['totalPoints'] > data2['totalPoints']) ? 1 : 0;
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order! * result);
    })
  }

  calculateSummary(personId: number): void {
    var extra = this.calculateExtraRecords(personId);
    let summary: Summary = {
      id: personId,
      season: this.season,
      wins: this.results.filter(x => x.winnerId == personId && x.season == this.season).length + extra.wins,
      losses: this.results.filter(y => y.loserId == personId && y.season == this.season).length + extra.losses,
      totalPoints: 0,
      totalAgainst: this.resultService.getTotalPointsAgainst(personId, this.season),
      moves: this.moveService.getMovesByManagerBySeason(personId, this.season),
      draft: this.moveService.getDraftSpotByManagerBySeason(personId, this.season),
      champion: this.memberService.checkIfChampion(personId, this.season)
    };
    this.scores.forEach((score) => {
      if (score.id == personId && score.season == this.season) {
        summary.totalPoints += score.score;
      }
    })

    this.summaries.push(summary);
  }

  calculateExtraRecords(personId: number): Extra {
    let extra: Extra = {
      wins: 0,
      losses: 0
    };
    var weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    if (this.season > 2020) {
      weeks.push(14);
    }
    for (var week of weeks) {
      if (this.scores.filter(x => x.season == this.season && x.weekNumber == week && x.id == personId).length != 0) {
        if(this.calculateTopHalf(personId, week, this.season)) {
          extra.wins += 1
        }
        else {
          extra.losses += 1;
        }
      }
    }
    return extra;
  }

  calculateAltRecords(id: number): AltResult[] {
    var altResults: AltResult[] = [];
    var records = this.results.filter(x => x.season == this.season && (x.winnerId == id || x.loserId == id)).sort(x => x.weekNumber);
    for (var record of records) {
      let alt: AltResult = {
        season: record.season,
        winnerId: record.winnerId,
        loserId: record.loserId,
        winningScore: record.winningScore,
        losingScore: record.losingScore,
        weekNumber: record.weekNumber,
        topHalf: this.calculateTopHalf(id, record.weekNumber, record.season)
      };
      altResults.push(alt);
    }
    return altResults;
  }

  calculateTopHalf(id: number, week: number, season: number): boolean {
    var topHalfResult = false;
    var seasonsWith8Teams = [2021, 2022, 2023,2024];
    var weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    if (this.season > 2020) {
      weeks.push(14);
    }
    var scoresInAWeek = this.scores.filter(x => x.season == season && x.weekNumber == week)
      .sort(function (a, b) { return a.score - b.score });
    var userScore = scoresInAWeek.filter(x => x.id == id)[0];
    // 0 indexed ranking from lowest to highest
    var scoreRankForTheWeek = scoresInAWeek.findIndex(x => x == userScore);
    // scoring 6th or better in 12 team league
    if (!seasonsWith8Teams.includes(this.season) && scoreRankForTheWeek > 5) {
      topHalfResult = true;
    }
    // scoring 4th or better in 8 team league
    else if (seasonsWith8Teams.includes(this.season) && scoreRankForTheWeek > 3) {
      topHalfResult = true;
    }
    return topHalfResult;
  }

  showRecords(id: number): void {
    this.showRecordWindow = true;
    this.records = this.calculateAltRecords(id);
    this.summary = this.summaries.filter(x => x.id == id)[0];
    var topScorerOpponentCount = this.resultService.getWeeksAgainstNumber1Scorer(id).filter(x => x.season == this.season)[0];
    this.weeksCount = topScorerOpponentCount.count;
  }
}
