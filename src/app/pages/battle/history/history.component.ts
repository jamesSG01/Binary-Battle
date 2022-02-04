import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  username = 'JoeMaMa';
  games = [
    { res:true, date: '09-05-22 13:49', pnl: 150, pnlPoint: 100 },
    { res:true, date: '09-05-22 13:49', pnl: -10, pnlPoint: 100 },
    { res:true, date: '09-05-22 13:49', pnl: 20, pnlPoint: 100 },
    { res:true, date: '09-05-22 13:49', pnl: -50, pnlPoint: 100 },
    { res:true, date: '09-05-22 13:49', pnl: 130, pnlPoint: 100 },
    { res:true, date: '09-05-22 13:49', pnl: 120, pnlPoint: 100 },
    { res:true, date: '09-05-22 13:49', pnl: 10, pnlPoint: 100 },
    { res:true, date: '09-05-22 13:49', pnl: 750, pnlPoint: 100 },
    { res:true, date: '09-05-22 13:49', pnl: -10, pnlPoint: 100 },
    { res:true, date: '09-05-22 13:49', pnl: 12, pnlPoint: 100 },
  ];
}
