import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  b1 = false;b2 = false;b3 = false;b4 = false;b5 = false;b6 = false; 
  constructor() { }

  ngOnInit(): void {
    
    let button = document.getElementById('show-guide');
    button.click();

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

}
