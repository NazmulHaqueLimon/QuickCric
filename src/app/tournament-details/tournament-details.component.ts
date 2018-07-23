import { Component, OnInit ,Input} from '@angular/core';
import {Tournament} from '../tournament';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TournamentService } from '../tournament.service';


@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {
   
  @Input() tournament:Tournament;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTournament();
  }
  getTournament(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tournamentService.getTournament(id)
      .subscribe(tournament => this.tournament = tournament);
  }

}
