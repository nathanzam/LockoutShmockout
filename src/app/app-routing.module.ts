import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeagueMembersComponent } from './components/league-members/league-members.component';
import { ResultsComponent } from './components/results/results.component';
import { LuckComponent } from './components/luck/luck.component';
import { OuchComponent } from './components/ouch/ouch.component';
import { ExtraWinsComponent } from './components/extra-wins/extra-wins.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Luck', component: LuckComponent },
  { path: 'Members', component: LeagueMembersComponent },
  { path: 'Ouch', component: OuchComponent },
  { path: 'Results', component: ResultsComponent },
  { path: 'TopHalf', component: ExtraWinsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
