import { Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserFormComponent } from './users/user-form/user-form.component';

export const routes: Routes = [{
    path: "users",
    component: UsersListComponent,
},
{
    path: "users/:userId",
    component: UserProfileComponent
},
{
    path: 'users/form/create',
    component: UserFormComponent
},
{ path: 'users/form/update/:userId', component: UserFormComponent }
];
