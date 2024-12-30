import {Component, computed, EventEmitter, input, Input, Output} from '@angular/core';
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
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string
  @Input({required: true}) name!: string
  @Output() select = new EventEmitter()

  get imagePath() {
    return "assets/users/" + this.avatar;
  }

  onSelectUser() {
    console.log("Teste")
    this.select.emit(this.id);
  }
}
