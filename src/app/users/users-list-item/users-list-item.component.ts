import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserType } from '../users.types';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrl: './users-list-item.component.scss'
})
export class UsersListItemComponent implements OnInit, OnDestroy, OnChanges {
  constructor(public usersService: UsersService) { }
  @Input() user: UserType | undefined;

  // angular hooks

  ngOnInit() {
    console.log("Hello from user!", this.user?.email);
  }

  ngOnDestroy() {
    console.log("I will be destroyed", this.user?.email);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, "!!!");
    console.log(changes['user'].isFirstChange());
  }

  getEditUserLink(userId: string) {
    return `form/update/${userId}`;
  }

}
