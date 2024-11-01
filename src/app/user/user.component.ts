// src/app/user/user.component.ts
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ChildUser } from '../child-user';
import { User } from '../user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Output() childUsersEmitter = new EventEmitter<ChildUser[]>();
  @Input() users: any;

  childUsers: ChildUser[] = [
    { Id: 1, firstname: 'Jemal', lastname: 'Bagashvili', DateOfBirth: '2010-01-01', PhoneNumber: '855787312', email: 'john@example.com' },
    { Id: 2, firstname: 'Playboi', lastname: 'Carti', DateOfBirth: '1997-02-02', PhoneNumber: '0987654321', email: 'jane@example.com' }
  ];

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      Id: new FormControl(null, Validators.required),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      DateOfBirth: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
      email: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  emitChildUsers() {
    this.childUsersEmitter.emit(this.childUsers);
  }

  addUser() {
    if (this.userForm.valid) {
      this.childUsers.push(this.userForm.value);
      this.userForm.reset();
    }
  }
}
