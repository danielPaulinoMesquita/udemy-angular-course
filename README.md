# FirstAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Instructions for Creating Components Using Angular CLI

* This command serves for creating component and without tests
ng g c shared/card --skip-tests

## ng-content Content Projection
it looks like 'children' of React js, when you need to pass/show a Component through the children component.
One example:
export const Test ({children}) => {

  return (
  <div>
    {{children}}
  </div>
  )
}


## Pipe, it's a way to transform values in the html
To do that, you may import DatePipes and use it in the dom as "| date" there are other pipes.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# udemy-angular-course
