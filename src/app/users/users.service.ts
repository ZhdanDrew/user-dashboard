import { Injectable, OnInit } from '@angular/core';
import { UserType } from './users.types';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {
    this.users = this.generateUsers();
  }

  users: Array<UserType> = [];

  generateUsers(): Array<UserType> {
    const users = new Array(15).fill(0);

    return users.map((element, index) => {
      return {
        id: faker.database.mongodbObjectId(),
        fullname: faker.person.fullName(),
        email: faker.internet.email(),
        salary: faker.number.int({ min: 500, max: 6000 }),
        job: faker.person.jobTitle(),
        image: faker.image.avatar(),
        bio: faker.person.bio(),
        skills: faker.helpers.arrayElements([
          'js',
          'ts',
          'html',
          'css',
          'angular',
          'react',
        ]),
      };
    });
  }

  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  addUser(user: UserType) {
    this.users = [...this.users, user];
  }

  getOneUser(id: string) {
    return this.users.find((user) => user.id === id);
  }

  
}


