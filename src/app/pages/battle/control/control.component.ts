import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ]
})
export class ControlComponent implements OnInit {
  stakeOpt: number[] = [5, 10, 25, 50];
  boundOpt: number[] = [0.1,0.5,1];
  stakeAmount:number = 5;
  matchDuration:number = 15;
  step = 0;
  bound:number = 0.5;
  ngOnInit(): void {
    
  }
  minus(){
    this.stakeAmount--;
  } 
  add(){
    this.stakeAmount++;
  }minusMatch(){
    if(this.matchDuration >=30)
      this.matchDuration-= 15;
  } 
  addMatch(){
    if(this.matchDuration <60)
      this.matchDuration+=15;
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
