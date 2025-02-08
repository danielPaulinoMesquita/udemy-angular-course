import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {TasksComponent} from "./tasks/tasks.component";
import {UserComponent} from "./user/user.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";
import {TaskComponent} from "./tasks/task/task.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ],
  imports: [BrowserModule, FormsModule, SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}
