import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service';
import {Tournament} from '../tournament';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tournaments:Tournament[];

  constructor(private trnService: TournamentService) { }

  ngOnInit() {
    this.getTournaments();
  }
  getTournaments(): void {
    this.trnService.getTournaments()
        .subscribe(tournaments => this.tournaments = tournaments.slice(1, 5));
  }

}
