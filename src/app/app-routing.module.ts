import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBoardComponent } from './display-board/display-board.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizingComponent } from './organizing/organizing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:DisplayBoardComponent },
  { path: 'organize', component:OrganizingComponent },
  { path: 'details/:id', component: TournamentDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
   
}
