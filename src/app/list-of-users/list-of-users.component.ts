import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html'
})
export class ListOfUsersComponent implements OnInit {
  users: [User];

  constructor(private userService: UserService){}
  ngOnInit(): void {
    
  }

  displayListOfUsers() {
      this.userService.getUserDetails().subscribe( res => {
        this.users = res;
    });
  }

}
