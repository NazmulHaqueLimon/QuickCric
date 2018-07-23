import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-register-tournament',
  templateUrl: './register-tournament.component.html',
  styleUrls: ['./register-tournament.component.css']
})
export class RegisterTournamentComponent implements OnInit {
 foods: Food[] = [
    {value: 'steak-0', viewValue: 'T20'},
    {value: 'pizza-1', viewValue: '15'},
    {value: 'tacos-2', viewValue: '10'}
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
