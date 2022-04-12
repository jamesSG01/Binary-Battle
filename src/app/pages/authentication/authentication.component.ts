import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service'
import { LoginData } from 'src/app/shared/models/login-data.model'
import {NgForm} from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']                                                                                                                                                                                                                                          
})
export class AuthenticationComponent implements OnInit {
  //declaring 
  isActive:boolean = false;
  username:string;
  email: string;
  password: string;
  constructor(private authService: AuthService){  }
  ngOnInit(): void {
  }
  activateRightPanel(){
    this.isActive = !this.isActive;
  };
  login(data):void{
    this.authService.login(data.email,data.password);
    alert("Request Sent!")
  }
  register(data):void {
    console.log(data.username);
    this.authService.register(data.username, data.email,data.password);
    alert("Request Sent!")
  }
}
