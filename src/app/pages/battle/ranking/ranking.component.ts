import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/users.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  users: User[] = [];
  constructor( private userService: UsersService ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res: User[]) => {
      this.users = res;
    })
  }
  addUser() {
    this.userService.addUser();
  }
}
