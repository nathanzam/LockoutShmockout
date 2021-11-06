import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LeagueMembersComponent } from './components/league-members/league-members.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Members', component: LeagueMembersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
