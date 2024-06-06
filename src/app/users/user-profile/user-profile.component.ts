import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserType } from '../users.types';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  constructor(public usersService: UsersService) { }

  userId: string | undefined;
  user?: UserType;

  ngOnInit() {
    this.userId = window.location.pathname.split('/').at(-1);

    if (this.userId) {
      this.user = this.usersService.getOneUser(this.userId);
    }

    console.log("user:", this.user);
  }
}
