import { Component, OnInit } from '@angular/core';

var  playerRplayers 
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
  players = [
    { rank: 1, name: 'Dr Nice' },
    { id: 5, name: 'Narco' },
    { id: 2, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 3, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
}
