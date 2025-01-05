import {Component, computed, EventEmitter, input, Input, output, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

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
  // this is not more useful.
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string
  @Input({required: true}) user!: {
    id: string;
    avatar: string;
    name: string;
  }
  @Output() select = new EventEmitter<string>() // Adding a type, ensure that value passed to select is string

  // this output unlike signal, it is another thing
  // select = output<string>()

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id); // If we pass a number to select, it shows up a warning error because new EventEmitter<string>
  }
}
