import {Component, computed, input, Input} from '@angular/core';
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
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string

  // this way to declare only allows read, so it's read only
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/'+ this.avatar();
  })

  // get imagePath() {
  //   return "assets/users/" + this.avatar;
  // }

  onSelectUser() {

  }
}
