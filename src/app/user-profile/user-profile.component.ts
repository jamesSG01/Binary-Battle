import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component(...)
export class UserProfileComponent {
  constructor(public auth: AuthService) { }
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
