import { Component } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";
import {NgOptimizedImage} from "@angular/common";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  // get is used to guarantee the return of something,
  // then you can use in template like a property "imagePath" this is considered a good practice.
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }

  onSelectUser() {
    console.log("CLICKED!!! ")
  }
}
