import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
=======

>>>>>>> a60df13e14aa72011beceb8b251c5fd6819b6522
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }

=======
  isActive:boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  activateRightPanel(){
    this.isActive = !this.isActive;
  };
>>>>>>> a60df13e14aa72011beceb8b251c5fd6819b6522
}
