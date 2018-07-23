import { Injectable } from '@angular/core';
import {Tournament} from './tournament';
import {tournament_list} from './mock-tournaments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor() { }

 
  getTournaments(): Observable<Tournament[]> {
    return of(tournament_list);
  }
  getTournament(id: number): Observable<Tournament> {
    
    return of(tournament_list.find(hero => hero.id === id));
  }
}
