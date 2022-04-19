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


## 1. The Hero Editor
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


## 2. Display a List

**ngFor**

The *ngFor is Angular's repeater directive. It repeats the host element for each element in a list.

sample syntax: <li *ngFor="let item of items"></li>

The syntax in this example is as follows:

<li>	The host element.

items	Holds the items list from the Component class, the items list.

item	Holds the current item object for each iteration through the list.



**Event binding**

a button with a click event binding:

<button type="button" (click)="someFunction()"></button>



**ngIf**

<div *ngIf="ifThisExists">(then display this div)</div>


**Angular class binding**

Angular's class binding can add and remove a CSS class conditionally. Add [class.some-css-class]="some-condition" to the element you want to style.

Toggling a class with the [class.selected] binding:

for example: <button type="button" (click)="onSelect(hero)" [class.selected] = "hero === selectedHero"></button>

When the current row hero is the same as the selectedHero, Angular adds the selected CSS class. When the two heroes are different, Angular removes the class.



## 3. Create a Feature Component


https://angular.io/tutorial/toh-pt3#create-a-feature-component



