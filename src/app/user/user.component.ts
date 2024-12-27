import {Component, computed, Input, signal} from '@angular/core';
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
  @Input() avatar!: string
  @Input() name!: string

  get imagePath() {
    return "assets/users/" + this.avatar;
  }

  onSelectUser() {}
}
