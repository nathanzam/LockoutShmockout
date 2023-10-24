import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CarouselModule } from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueMembersComponent } from './components/league-members/league-members.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { MemberService } from './services/member-service.service';
import { MovesService } from './services/moves.service';
import { ResultsService } from './services/results.service';
import { LuckComponent } from './components/luck/luck.component';
import { OuchComponent } from './components/ouch/ouch.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueMembersComponent,
    HomeComponent,
    ResultsComponent,
    LuckComponent,
    OuchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    DialogModule,
    ScrollTopModule,
    CarouselModule
  ],
  providers: [
    MemberService,
    MovesService,
    ResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
