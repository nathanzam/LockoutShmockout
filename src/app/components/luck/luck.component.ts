import { Component, OnInit } from '@angular/core';
import { Member, MemberLuck } from '../../interfaces/member';
import { Result } from '../../interfaces/result';
import { Score } from '../../interfaces/score';
import { MemberService } from '../../services/member-service.service';
import { ResultsService } from '../../services/results.service';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-luck',
  templateUrl: './luck.component.html',
  styleUrls: ['./luck.component.scss']
})
export class LuckComponent implements OnInit {

  members: Member[] = [];
  results: Result[] = [];
  scores: Score[] = [];
  luck: MemberLuck[] = [];

  constructor(private memberService: MemberService,
    private resultService: ResultsService,
    private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.members = this.memberService.getMembers();
    this.results = this.resultService.getResults();
    this.scores = this.scoreService.getScores();
    this.members.forEach(manager => {
      this.calculateLuck(manager.id);
    })
  }

  calculateLuck(id: number): void {
    var luckyWinsCount = 0;
    var unluckyLossesCount = 0;
    var luckyWeeks: Score[] = [];
    var unluckyWeeks: Score[] = [];
    var manager = this.members[id - 1].firstname + ' ' + this.members[id - 1].lastname;
    var seasons = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    var weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (var season of seasons) {
      if (season === 2020) {
        weeks.push(14);
      }
      for (var week of weeks) {
        var resultsInAWeek = this.results.filter(x => x.season == season && x.weekNumber == week);
        var scoresInAWeek = this.scores.filter(x => x.season == season && x.weekNumber == week)
          .sort(function (a, b) { return a.score - b.score });        
        if (scoresInAWeek.some(x => x.id == id)) {
          var userScore = scoresInAWeek.filter(x => x.id == id)[0];
          var scoreRankForTheWeek = scoresInAWeek.findIndex(x => x == userScore);
          if (season != 2021 && scoreRankForTheWeek < 6 && resultsInAWeek.some(x => x.winnerId == id)) {
            luckyWinsCount += 1;
            luckyWeeks.push(userScore);
          }
          else if (season == 2021 && scoreRankForTheWeek < 4 && resultsInAWeek.some(x => x.winnerId == id)) {
            luckyWinsCount += 1;
            luckyWeeks.push(userScore);
          }
          else if (season != 2021 && scoreRankForTheWeek > 5 && resultsInAWeek.some(x => x.loserId == id)) {
            unluckyLossesCount += 1;
            unluckyWeeks.push(userScore);
          }
          else if (season == 2021 && scoreRankForTheWeek > 3 && resultsInAWeek.some(x => x.loserId == id)) {
            unluckyLossesCount += 1;
            unluckyWeeks.push(userScore);
          }
        }
      }
    }
    let luck: MemberLuck = {
      id: id,
      name: manager,
      luckyWins: luckyWinsCount,
      unluckyLosses: unluckyLossesCount,
      luckyWeeks: luckyWeeks,
      unluckyWeeks: unluckyWeeks
    }
    this.luck.push(luck);
  }

}
