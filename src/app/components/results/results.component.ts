import { Component, OnInit } from '@angular/core';
import { Member } from '../../interfaces/member';
import { Result, ResultNames } from '../../interfaces/result';
import { MemberService } from '../../services/member-service.service';
import { MovesService } from 'src/app/services/moves.service';
import { ResultsService } from '../../services/results.service';
import { TableModule, Table } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  members: Member[] = [];
  results: Result[] = [];
  resultsWithNames: ResultNames[] = [];

  constructor(private memberService: MemberService,
    private moveService: MovesService,
    private resultService: ResultsService) { }

  ngOnInit(): void {
    this.members = this.memberService.getMembers();
    this.results = this.resultService.getResults();
    this.results.forEach(result => {
      let res: ResultNames = {
        season: result.season,
        winnerName: this.members[result.winnerId - 1].firstname + ' ' + this.members[result.winnerId - 1].lastname,
        loserName: this.members[result.loserId - 1].firstname + ' ' + this.members[result.loserId - 1].lastname,
        winningScore: result.winningScore,
        losingScore: result.losingScore,
        weekNumber: result.weekNumber
      }
      this.resultsWithNames.push(res);
    })
  }

  clear(table: Table) {
    table.clear();
  }
}
