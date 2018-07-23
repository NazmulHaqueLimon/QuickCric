import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service';
import {Tournament} from '../tournament';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
  tournaments:Tournament[];
  
  

  constructor(private trnService: TournamentService) { }

  ngOnInit() {
    this.getTournaments();
  }
  getTournaments(): void {
    this.trnService.getTournaments()
        .subscribe(tournaments => this.tournaments = tournaments);
  }

  

}
