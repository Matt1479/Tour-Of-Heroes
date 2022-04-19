# Tour of Heroes notes

## Create a new workspace:

`ng new name-of-a-project`

## Launch the application:

first go to the workspace directory:
`cd angular-tour-of-heroes`

Then launch the application:

`ng serve --open`

The ng serve command builds the app, starts the development server, watches the source files, and rebuilds the application as you make changes to those files.

The --open flag opens a browser to http://localhost:4200.

<br><br>

## Angular Components

**@Component**

@Component is a decorator function that specifies the Angular metadata for the component.

selector	The component's CSS element selector.

templateUrl	The location of the component's template file.

styleUrls	The location of the component's private CSS styles.


**creating a new component:**

`ng generate component heroes`


**Pipes**

Pipes are used to format strings, dates, currency amounts, other data.


**ngModel**

`[(ngModel)]` is Angular's two-way data binding syntax.

Here it binds the hero.name property to the HTML textbox so that data can flow in both directions: From the hero.name property to the textbox and from the textbox back to the hero.name.


### Importing AppModule(s)
(in this case FormsModule)

in the app.module.ts file add:

`import { FormsModule } from '@angular/forms';` // <-- NgModel lives here


Then add FormsModule to the @NgModule metadata's imports array, which contains a list of external modules that the application needs.

`imports: [`
`  BrowserModule,`
`  FormsModule`
`],`



### Declaring a component

Every component must be declared in exactly one NgModule (in the app.module.ts file).

for example:

`import { HeroesComponent } from './heroes/heroes.component';`

The HeroesComponent is declared in the @NgModule.declarations array.

`declarations: [`
`  AppComponent,`
`  HeroesComponent`
`],`

