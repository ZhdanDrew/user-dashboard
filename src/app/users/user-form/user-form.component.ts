import { Component } from '@angular/core';
import { UserType } from '../users.types';
import { faker } from '@faker-js/faker';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  constructor(public usersService: UsersService) { }

  skills: Array<string> = ['JS', 'HTML', 'CSS', 'React', 'Angular', 'TS'];

  defaultEmails: Array<string> = [
    'email@1gmail.com',
    'email@2gmail.com',
    'email@3gmail.com',
  ];

  userData = {
    id: faker.database.mongodbObjectId(),
    image: faker.image.avatar(),
    email: new FormControl(localStorage.getItem('email') || ''),
    bio: new FormControl(''),
    fullname: new FormControl(''),
    job: new FormControl(''),
    salary: new FormControl(0),
    skills: new FormControl<string[]>([]),
  };

  setEmailFromDefault(email: string) {
    this.userData.email.setValue(email);
  }

  addSkillToUser(skill: string) {
    // if (this.userData.skills.value) {
    //   this.userData.skills.value.push(skill);
    // }

    // this.userData.skills.value?.push(skill);
    const skills = this.userData.skills.value
      ? [...this.userData.skills.value, skill]
      : [];

    this.userData.skills.setValue(skills);
  }

  removeUserSkill(skill: string) {
    const newSkills = this.userData.skills.value?.filter((sk) => sk !== skill);

    newSkills && this.userData.skills.setValue(newSkills);
  }

  // Завдання:
  // написати метод, що буде додавати до форми новий cкіл у поле skills

  onSubmit() {
    const { id, image, skills } = this.userData;

    const user: UserType = {
      id,
      image,
      skills: this.userData.skills.value || [],
      email: this.userData.email.value || '',
      bio: this.userData.bio.value || '',
      fullname: this.userData.fullname.value || '',
      salary: this.userData.salary.value || 0,
      job: this.userData.job.value || '',
    };

    console.log(user, 'user from form');

    this.usersService.addUser(user);
  }
}