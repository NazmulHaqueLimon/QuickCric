import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
export interface Food {
  value: string;
  viewValue: string;
}
export interface Food {
  value: string;
  viewValue: string;
}
export interface Food {
  value: string;
  viewValue: string;
}
export interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
 
]; 
@Component({
  selector: 'app-score-live',
  templateUrl: './score-live.component.html',
  styleUrls: ['./score-live.component.css']
})
export class ScoreLiveComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Team A'},
    {value: 'pizza-1', viewValue: 'Team B'}
   
  ];
  fooods: Food[] = [
    {value: 'steak-0', viewValue: 'Bat'},
    {value: 'pizza-1', viewValue: 'Bowl'}
   
  ];
  foooods: Food[] = [
    {value: 'steak-0', viewValue: 'Arnob'},
    {value: 'pizza-1', viewValue: 'Limon'},
    {value: 'pizza-1', viewValue: 'Rafee'},
    {value: 'pizza-1', viewValue: 'Tanim'},
    {value: 'pizza-1', viewValue: 'Sayekul'},
    {value: 'pizza-1', viewValue: 'Saiful'},
    {value: 'pizza-1', viewValue: 'Sumon'},
    {value: 'pizza-1', viewValue: 'Bappy'},
    {value: 'pizza-1', viewValue: 'Talha'}
   
  ];
  bowlers: Food[] = [
    {value: 'steak-0', viewValue: 'Arnob'},
    {value: 'pizza-1', viewValue: 'Limon'},
    {value: 'pizza-1', viewValue: 'Rafee'},
    {value: 'pizza-1', viewValue: 'Tanim'},
    {value: 'pizza-1', viewValue: 'Sayekul'},
    {value: 'pizza-1', viewValue: 'Saiful'},
    {value: 'pizza-1', viewValue: 'Sumon'},
    {value: 'pizza-1', viewValue: 'Bappy'},
    {value: 'pizza-1', viewValue: 'Talha'}
   
  ];

  overs : Food[] = [
    {value: 'steak-0', viewValue: '1'},
    {value: 'pizza-1', viewValue: '2'},
    {value: 'pizza-1', viewValue: '3'},
    {value: 'pizza-1', viewValue: '4'},
    {value: 'pizza-1', viewValue: '5'},
    {value: 'pizza-1', viewValue: '6'},
    {value: 'pizza-1', viewValue: '7'},
    {value: 'pizza-1', viewValue: '8'},
    {value: 'pizza-1', viewValue: '10'}
   
  ];

  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
  }

}
