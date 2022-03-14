import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css']
})
export class WelcomeModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  startGuide(){
    let close = document.getElementById('close-btn');
    let button = document.getElementById('start-guide');
    close.click();
    button.click();
  }
}
