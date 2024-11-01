// src/app/app.component.ts
import { Component } from '@angular/core';
import { ParentUser } from './user/parent-user';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { ChildUser } from './child-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gigakoshoridze';
  parentUsers: ParentUser[] = [
    { Id: 1, firstname: 'Wade', lastname: 'Willson', DateOfBirth: '2002-01-01', PhoneNumber: '1234567890', email: 'wade@example.com' },
    { Id: 2, firstname: 'Demarcous', lastname: 'Cousins', DateOfBirth: '1999-02-02', PhoneNumber: '0987654321', email: 'demarcous@example.com' },
    { Id: 3, firstname: 'Peter', lastname: 'Parker', DateOfBirth: '1996-03-03', PhoneNumber: '1122334455', email: 'peter@example.com' },
    { Id: 4, firstname: 'Ioseb', lastname: 'Jugashvili', DateOfBirth: '2002-04-04', PhoneNumber: '2233445566', email: 'ioseb@example.com' },
    { Id: 5, firstname: 'Kanye', lastname: 'East', DateOfBirth: '2007-05-05', PhoneNumber: '3344556677', email: 'kanye@example.com' }
  ];

  childUsers: ChildUser[] = [];

  handleChildUsers(childUsers: ChildUser[]) {
    this.childUsers = childUsers;
  }
}
