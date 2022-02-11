import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service'
import { LoginData } from 'src/app/shared/models/login-data.model'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isActive:boolean = false;
  constructor( 
    private readonly authService: AuthService,
    private readonly router: Router) { }
  ngOnInit(): void {
  }
  activateRightPanel(){
    this.isActive = !this.isActive;
  };
  register(data: LoginData) {
    this.authService
      .register(data)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => console.log(e.message));
    alert('Registered!');
  }
}
