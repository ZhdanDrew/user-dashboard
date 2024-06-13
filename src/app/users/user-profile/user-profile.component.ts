import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserType } from '../users.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  constructor(public usersService: UsersService, public router: Router) { }

  userId: string | undefined;
  user?: UserType;

  ngOnInit() {
    this.userId = this.router.url.split('/').at(-1);

    if (this.userId) {
      this.user = this.usersService.getOneUser(this.userId);
    }
  }
}
