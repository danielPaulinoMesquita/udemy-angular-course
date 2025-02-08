import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type User} from './user.model'
import {CardComponent} from "../shared/card/card.component";

// type User = {
//   id: string
//   name: string,
//   avatar: string
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>() ;// Adding a type, ensure that value passed to select is string

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id); // If we pass a number to select, it shows up a warning error because new EventEmitter<string>
  }
}
