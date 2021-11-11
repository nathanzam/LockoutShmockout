import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member-service.service';
import { MovesService } from '../../services/moves.service';
import { ResultsService } from '../../services/results.service';
import { ScoreService } from '../../services/score.service';
import { Member, MemberPlus } from '../../interfaces/member';
import { UserRecord } from '../../interfaces/record';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-league-members',
  templateUrl: './league-members.component.html',
  styleUrls: ['./league-members.component.scss']
})
export class LeagueMembersComponent implements OnInit {

  leagueMembers: Member[] = [];
  members: MemberPlus[] = [];
  records: UserRecord[] = [];
  showRecordWindow: boolean = false;

  constructor(private memberService: MemberService,
    private moveService: MovesService,
    private resultService: ResultsService,
    private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.leagueMembers = this.memberService.getMembers();
    this.leagueMembers.forEach(member => {
      this.getMinMax(member.id, member.firstname + ' ' + member.lastname, member.champion, member.teamname, member.playoffs)
    })
  }

  showRecords(id: number): void {
    this.showRecordWindow = true;
    this.records = this.resultService.getManagerRecordAgainstOtherManagersById(id);
  }

  getMinMax(id: number, name: string, champion: string[], teamname: string[], playoffs: string[]): void {
    var bestScore = this.scoreService.getBestScoringWeekByManagerId(id);
    var worstScore = this.scoreService.getWorstScoringWeekByManagerId(id);
    var best = this.resultService.getResultBySeasonWeekAndManager(bestScore.id, bestScore.season, bestScore.weekNumber);
    var worst = this.resultService.getResultBySeasonWeekAndManager(worstScore.id, worstScore.season, worstScore.weekNumber);
    var member: MemberPlus = {
      id: id,
      name: name,
      champion: champion,
      teamname: teamname,
      playoffs: playoffs,
      best: best,
      worst: worst,
      draft: this.moveService.getAllDraftsByManagerId(id)
    };
    this.members.push(member);
  }

}
