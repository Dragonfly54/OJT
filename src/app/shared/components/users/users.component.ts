import { Component, ViewChild, OnInit } from '@angular/core';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';
import { Users } from './users';
import { USERS } from './users.data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @ViewChild(AddUserModalComponent, { static: true })
  addUserModal!: AddUserModalComponent;

  users: Users[] = USERS;
  pagedUsers: Users[] = [];
  sortedColumn: string = '';
  sortDirection: string = 'asc';
  initialPage: number;
  pageSize: number = 4;

  constructor() {
    this.initialPage = 1;
    this.updatePagedUsers();
  }

  sort(column: string): void {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.users.sort((a, b) => {
      const direction = this.sortDirection === 'asc' ? 1 : -1;
      const columnA = this.getColumnValue(a, column);
      const columnB = this.getColumnValue(b, column);

      if (typeof columnA === 'string' && typeof columnB === 'string') {
        return columnA.localeCompare(columnB) * direction;
      } else {
        return 0;
      }
    });
    this.updatePagedUsers();
  }

  getColumnValue(item: Users, column: string): any {
    switch (column) {
      case 'userImg':
      case 'mobileNum':
      case 'email':
        return item[column];
      case 'firstName':
      case 'lastName':
        return item[column].toLowerCase();
      default:
        throw new Error('Unhandled column: ${column}');
    }
  }

  ngOnInit(): void {}

  updatePagedUsers() {
    const startIndex = (this.initialPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.users.length);
    this.pagedUsers = this.users.slice(startIndex, endIndex);
  }

  pageChange(page: number) {
    this.initialPage = page;
    this.updatePagedUsers();
  }

  updatePageSize() {
    this.users = USERS.map((user, i) => ({
      ...user,
      id: i + 1,
    }));
    this.updatePagedUsers();
  }

  openModal() {
    this.addUserModal.open();
  }

  addNewUsers(newUser: Users) {
    this.users.push(newUser);
    this.updatePagedUsers();
  }

  editUser(user: Users) {
    user.editing = true;
  }

  saveUser(user: Users) {
    user.editing = false;
  }

  cancelEdit(user: Users) {
    user.editing = false;
  }

  updateUser(
    user: Users,
    updatedValue: string,
    field: 'userImg' | 'firstName' | 'lastName' | 'mobileNum' | 'email'
  ) {
    switch (field) {
      case 'userImg':
        user.userImg = updatedValue;
        break;
      case 'firstName':
        user.firstName = updatedValue;
        break;
      case 'lastName':
        user.lastName = updatedValue;
        break;
      case 'mobileNum':
        user.mobileNum = updatedValue;
        break;
      case 'email':
        user.email = updatedValue;
        break;

      default:
        break;
    }
  }

  deleteUser(user: Users) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.updatePagedUsers();
    }
  }
}
