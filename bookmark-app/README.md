# BookmarkApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

!!! `nvm use v21.7.3` and  `npx json-server db.json` in another terminal for running json-server for API requests

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

## Specific assignment details: 

Done:
- created UI - based on standalone components;
- specified routing paths;
- styled using Angular Material components and responsive flexbox (scss);
- integrated RxJS for making API calls;
- integrated NgRx store for saving sand selecting bookmarks in it (action, reducer, selector).

To be done:
- add the newly-added bookmark into the db after storing it in store;
- implement the "edit" using (almost) same HTML from creating bookmarks - but filling in the form data;
- save changes to the store using a new action type and a new reducer for specifying how to modify the state + update to db (PUT); 
- implement fuzzy filter.