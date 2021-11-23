import { Component, OnInit } from '@angular/core';
import { Member } from '../../interfaces/member';
import { Result, ResultNames } from '../../interfaces/result';
import { Score } from '../../interfaces/score';
import { Summary } from '../../interfaces/summary';
import { MemberService } from '../../services/member-service.service';
import { MovesService } from 'src/app/services/moves.service';
import { ResultsService } from '../../services/results.service';
import { ScoreService } from '../../services/score.service';
import { TableModule, Table } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  members: Member[] = [];
  results: Result[] = [];
  scores: Score[] = [];
  summaries: Summary[] = [];
  season: number = 2021;
  seasons: SelectItem[] = [
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
  ]

  constructor(private memberService: MemberService,
    private moveService: MovesService,
    private resultService: ResultsService,
    private scoreService: ScoreService) { }

  ngOnInit(): void {    
    this.members = this.memberService.getMembers();
    this.results = this.resultService.getResults();
    this.scores = this.scoreService.getScores();
    this.members.forEach(member => {
      this.calculateSummary(member.id);
    })
  }

  switchSeason(value: number): void {
    this.season = value;
    this.summaries = [];
    this.members.forEach(member => {
      this.calculateSummary(member.id);
    })
  }

  calculateSummary(personId: number): void {
    let summary: Summary = {
      id: personId,
      season: this.season,
      wins: this.results.filter(x => x.winnerId == personId && x.season == this.season).length,
      losses: this.results.filter(y => y.loserId == personId && y.season == this.season).length,
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

  clear(table: Table) {
    table.clear();
  }
}
