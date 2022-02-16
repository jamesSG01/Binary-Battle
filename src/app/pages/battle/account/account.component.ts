import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service'
import { UsersService } from 'src/app/shared/services/users.service';
import { Observable } from 'rxjs/dist/types/internal/Observable';
import { user } from 'rxfire/auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  uid:string;
  user: Observable<any>;
  constructor(private auth: AuthService, private us: UsersService) { }
  ngOnInit(): void {
    this.uid = this.auth.getCurrentUID();
    console.log('UID: '+this.uid);
    this.user = this.us.getUserByUID(this.uid); 
    console.log('User:' + user.toString())
  }
}
