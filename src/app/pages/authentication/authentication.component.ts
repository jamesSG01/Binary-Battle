import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isActive:boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  activateRightPanel(){
    this.isActive = !this.isActive;
  };
}
