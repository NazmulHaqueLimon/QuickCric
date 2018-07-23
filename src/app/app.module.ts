import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
   MatIconModule, MatListModule,MatCardModule,MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';

import { DisplayBoardComponent } from './display-board/display-board.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizingComponent } from './organizing/organizing.component';
import { RegisterTournamentComponent } from './register-tournament/register-tournament.component';
import { AddTeamsComponent } from './add-teams/add-teams.component';
import { FixtureComponent } from './fixture/fixture.component';
import { ArrangeMatchComponent } from './arrange-match/arrange-match.component';
import { DisplayBoard2Component } from './display-board2/display-board2.component';
import { OrganizerProfileComponent } from './organizer-profile/organizer-profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { ScoreLiveComponent } from './score-live/score-live.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayBoardComponent,
    SignUpComponent,
    SignInComponent,  
    TournamentsComponent,
    TournamentDetailsComponent,
    DashboardComponent,
    OrganizingComponent,
    RegisterTournamentComponent,
    AddTeamsComponent,
    FixtureComponent,
    ArrangeMatchComponent,
    DisplayBoard2Component,
    OrganizerProfileComponent,
    ScoreLiveComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
