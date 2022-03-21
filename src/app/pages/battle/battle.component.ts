import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  //declare variables. 
  b1 = false;b2 = false;b3 = false; b4 = false;b5 = false;b6 = false; 
  congrats = false;
  dataStream: WebSocketSubject<any> = webSocket('wss://ws.finnhub.io?token=c83rosiad3ide9hecq4g');
  cp: any;
  cprogress: number = 50;
  win: any; 
  lose: any; 
  mid: any;
  points: number = 0;
  counter:number = 60;
  game_state:boolean = false;
  start_animation:boolean = false; 
  you_won:boolean = false;
  you_lost:boolean = false;
  constructor() { }

  ngOnInit(): void {
    
    let button = document.getElementById('show-guide');
    button.click();
    //sub oninit 
    this.dataStream.next({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'});
    this.dataStream.asObservable().subscribe((data:any) => {
      console.log("Subscriber got data >>>>> "+ JSON.stringify(data));
      if (data.type !='ping')
        this.cp = JSON.parse(JSON.stringify(data)).data[0].p; //get price. 
    });
  }

  game() {    
    this.start_game();
    type Timer = ReturnType<typeof setTimeout>
    const timer: Timer = setTimeout(() => {  
      this.win = Math.round( (this.cp + this.cp*0.001) * 100) / 100;
      this.lose = Math.round( (this.cp - this.cp*0.001) * 100) / 100;
      this.mid = this.cp;
      this.cprogress=  Math.round( ( (this.cp - this.lose) / (this.win - this.lose) * 100 )*100)/100;
      console.log('Game started at price:'+this.cp)
      this.counter = 15;// game is 60s 
      this.game_state = true;
  
      const interval  = setInterval(() => {
        this.counter--;
        this.dataStream.asObservable().subscribe((data:any) => {
          if (data.type !='ping') {
            this.cp = JSON.parse(JSON.stringify(data)).data[0].p;
            this.cprogress=  Math.round( ( (this.cp - this.lose) / (this.win - this.lose) * 100 )*100)/100;
          }
        });
        console.log('Time left:' + this.counter+'| Win at:'+this.win+'| Lose at:'+this.lose );
        if (this.cp < this.lose ) {
          this.points-= 100;
          clearInterval(interval);
          console.log('You Lost!');
          this.you_lost = true;
          this.result_ani();
        } else if (this.cp > this.win) {
          console.log('You Won!');
          this.points+= 150;
          this.you_won = true;
          this.result_ani();
          this.congr();
          clearInterval(interval);
        } 
        if (this.counter <=0) {
          if(this.cp >= this.mid){
            console.log('You Won!');
            this.you_won = true;
            this.result_ani();
            this.congr();
            this.points+= 150;
          } else {
            this.you_lost = true;
            this.result_ani();
            console.log('You Lost!');
            this.points-= 100;
          }
          this.game_state = false;
          clearInterval(interval);
        }
      }, 1000);
    }, 3000);
  }
  hl(num:number){
    switch(num) { 
      case 1: { 
        this.b1 = true;
        break; 
      } case 2: { 
        this.b1 = false;
        this.b2 = true;
        break; 
      } case 3: {
        this.b2 = false; 
        this.b3 = true;
        break; 
      } case 4: { 
        this.b3 = false;
        this.b4 = true;
        break; 
      } case 5: { 
        this.b4 = false;
        this.b5 = true;
        break; 
      } case 6: { 
        this.b5 = false;
        this.b6 = true;
      break; 
      } default: { 
        this.b1 = false;
        this.b2 = false;
        this.b3 = false;
        this.b4 = false;
        this.b5 = false;
        this.b6 = false;
         break; 
      } 
   } 
  }
  congr(){
    this.congrats = true; 
    type Timer = ReturnType<typeof setTimeout>
    const timer: Timer = setTimeout(() => {    this.congrats = false; 
    }, 15000)
  }
  result_ani() {
    type Timer = ReturnType<typeof setTimeout>;
   
  
      const timer: Timer = setTimeout(() => {  this.you_lost = false; this.you_won = false; 
      }, 5000)
    
  }
  start_game(){
    this.start_animation = true; 
    type Timer = ReturnType<typeof setTimeout>
    const timer: Timer = setTimeout(() => {  this.start_animation = false; 
    }, 3000)
  }

}
