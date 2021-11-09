import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LeagueMembersComponent } from './components/league-members/league-members.component';
import { ResultsComponent } from './components/results/results.component';
import { LuckComponent } from './components/luck/luck.component';
import { CarrieComponent } from './components/carrie/carrie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ForKenny', component: CarrieComponent },
  { path: 'Luck', component: LuckComponent },
  { path: 'Members', component: LeagueMembersComponent },
  { path: 'Results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
