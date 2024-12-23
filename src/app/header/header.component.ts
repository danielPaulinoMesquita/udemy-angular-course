import {Component} from "@angular/core";

// Another way to create the decorator @Component
// @Component({
//   selector: 'app-header',
//   standalone: true,
//   // templateUrl: './header.component.html',
//   template: '<div><h2>teste com template</h2></div>',
//   styles: ['h1 { color: red}']
// })
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

}
