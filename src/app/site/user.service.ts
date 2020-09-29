import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: Array<User>

  constructor() {
    this.userList = new Array<User>();
    this.generateUserList();
    console.log(this.userList);

  }

  generateUserList(): void {
    let user: User = new User();
    user.userName = 'sainathan';
    user.firstName = 'sai';
    user.lastName = 'nathan';
    user.password = '12345678';
    user.isAdmin = true;
    this.userList.push(user);

    user = new User();
    user.userName = 'johncena';
    user.firstName = 'john';
    user.lastName = 'cena';
    user.password = 'qwertyui';
    user.isAdmin = true;
    this.userList.push(user);

    user = new User();
    user.userName = 'mahibhai';
    user.firstName = 'MS';
    user.lastName = 'Dhoni';
    user.password = 'champion';
    user.isAdmin = false;
    this.userList.push(user);

   
  }

  addUser(user: User): void {
    this.userList.push(user);
    console.log(this.userList);
  }

  getUser(userName: string): User {
    let user: User = new User();
    this.userList.forEach(u => {
      if (u.userName == userName)
        user = u;
    });
    return user;
  }
}
