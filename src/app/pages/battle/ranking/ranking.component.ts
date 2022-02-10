import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  players = [
    { id:1, name: 'Dr Nice' , point:123},
    { id: 5, name: 'Narco' ,point: 5221},
    { id: 2, name: 'Bombasto',point: 23 },
    { id: 14, name: 'Celeritas',point: 23 },
    { id: 3, name: 'Magneta' ,point: 3},
    { id: 16, name: 'RubberMan',point: 12312 },
    { id: 17, name: 'Dynama' ,point: 55},
    { id: 18, name: 'Dr IQ' ,point: 87},
    { id: 19, name: 'Magma',point: 122 },
    { id: 20, name: 'Tornado',point: 332}
  ];
}
