import {Component, computed, signal} from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(()=> 'assets/users/'+this.selectedUser().avatar);

  onSelectUser() {
    console.log("CLICKED!!! ")
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
  }
}
