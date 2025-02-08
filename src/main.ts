import {AppComponent} from './app/app.component';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// bootstrapApplication(HeaderComponent)
//   .catch((err) => console.error(err)); //  this another way to show your recent created component, but it's not recommended because not follows the correct pattern like a tree way
platformBrowserDynamic().bootstrapModule(AppModule);
