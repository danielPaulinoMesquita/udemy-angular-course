import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {HeaderComponent} from "./app/header/header.component";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(HeaderComponent)
//   .catch((err) => console.error(err)); //  this another way to show your recent created component, but it's not recommended because not follows the correct pattern like a tree way
