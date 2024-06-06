import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UsersModule } from './users/users.module';
import { HeaderRouteType } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  headerLinks: Array<HeaderRouteType> = [
    { path: "users", title: "Users list" },
    { path: "users/form/create", title: "Create User" }
  ];
}
