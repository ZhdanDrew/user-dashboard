import { Component, OnInit } from '@angular/core';
import { UserType } from '../users.types';
import { faker } from '@faker-js/faker';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  user?: UserType;
  userId?: string;

  isUpdate: boolean = false;

  constructor(
    public usersService: UsersService,
    public router: Router) { }

  ngOnInit() {

    if (this.router.url.includes('update')) {
      this.isUpdate = true;
      const userId = this.router.url.split('/').at(-1);

      if (userId) {
        this.user = this.usersService.getOneUser(userId);

        this.userData = this.initUserData();
      }
    }
  }

  skills: Array<string> = ['JS', 'HTML', 'CSS', 'React', 'Angular', 'TS'];

  defaultEmails: Array<string> = [
    'email@1gmail.com',
    'email@2gmail.com',
    'email@3gmail.com',
  ];

  formGroup = new FormGroup({
    name: new FormControl(""),
    bio: new FormControl(""),
  });

  initUserData() {
    return {
      id: new FormControl(this.user?.id || faker.database.mongodbObjectId()),
      image: new FormControl(this.user?.image || faker.image.avatar()),
      email: new FormControl(
        this.user?.email || localStorage.getItem('email') || ''
      ),
      bio: new FormControl(this.user?.bio || ''),
      fullname: new FormControl(this.user?.fullname || ''),
      job: new FormControl(this.user?.job || ''),
      salary: new FormControl(this.user?.salary || 0),
      skills: new FormControl<string[]>(this.user?.skills || []),
    };
  }

  userData = this.initUserData();

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
    const user: UserType = {
      id: this.userData.id.value || '',
      image: this.userData.image.value || '',
      skills: this.userData.skills.value || [],
      email: this.userData.email.value || '',
      bio: this.userData.bio.value || '',
      fullname: this.userData.fullname.value || '',
      salary: this.userData.salary.value || 0,
      job: this.userData.job.value || '',
    };

    console.log(user, 'user from form');

    this.isUpdate
      ? this.usersService.updateUser(user)
      : this.usersService.addUser(user);

    this.router.navigateByUrl('/users');
  }
}
