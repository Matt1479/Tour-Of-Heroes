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

### *ngFor

The *ngFor is Angular's repeater directive. It repeats the host element for each element in a list.

sample syntax: <li *ngFor="let item of items"></li>

The syntax in this example is as follows:

<li>	The host element.

items	Holds the items list from the Component class, the items list.

item	Holds the current item object for each iteration through the list.



### Event binding

a button with a click event binding:

<button type="button" (click)="someFunction()"></button>



### *ngIf

<div *ngIf="ifThisExists">(then display this div)</div>


### Angular class binding

Angular's class binding can add and remove a CSS class conditionally. Add [class.some-css-class]="some-condition" to the element you want to style.

Toggling a class with the [class.selected] binding:

for example: <button type="button" (click)="onSelect(hero)" [class.selected] = "hero === selectedHero"></button>

When the current row hero is the same as the selectedHero, Angular adds the selected CSS class. When the two heroes are different, Angular removes the class.



## 3. Create a Feature Component

Passing a hero object into hero-detail.component through @Input decorator (in the HeroDetailComponent class):

`@Input() hero?: Hero;`


one way data binding (from the child component to the parent component):
<app-hero-detail [hero]="selectedHero"></app-hero-detail>



////////////////////////////////////////////////////

## A do-over for a better understanding

creating a new workspace: `ng new project-name`

serve the application: `ng serve --open`

<br>

### Angular components

Components are the fundamental building blocks of Angular applications. They display data on the screen, listen for user input, and take action based on that input.

### AppComponent

app.component.ts - is the component **class** code, written in TypeScript.

app.component.html - is the component **template**, written in HTML

app.component.css - is the component's **private CSS** styles

### Interpolation (insertion) binding syntax:
<someTag>{{ someValue }}</someTag>

<br>

1. The Hero Editor
### Generating new component:
`ng generate component componentName`


The @Component decorator function:

<code>

@Component({

  selector: 'app-heroes',

  templateUrl: './heroes.component.html',

  styleUrls: ['./heroes.component.css']

})

</code>

selector - is the component's CSS element selector

templateURL - is the location of the component's template(HTML) file

styleURLs - is the location of the component's private CSS styles


**Always export the component class so you can import it elsewhere.**

To display a child component within a parent component use the <app-component-name></app-component-name> component element selector (the same as in the @Component decorator function)


**interface**

Interface is basically a class without initialization nor implementation for methods/properties

### Pipes:

Pipes are used to format strings, currency amounts, dates and other display data the syntax looks like this  {{ object.property | pipe }}

### Two-way binding:
In Angular we use `[(ngModel)]` for two-way data binding
for example you can bind an input value and a header content so both of them will display the same thing

for the `[(ngModel)]` to work we need to import FormsModule into app.module.ts


### AppModule

The AppModule (app.module.ts) is used to declare the application components in order to display them.

<br>

2. Display a List.

## exporting an array of objects:

`export const OBJECTS: Object[] = [ { id: 0, name: 'obj0' } { id: 1, name: 'obj1' } ];`

## importing an array of objects into a different file:

`import { OBJECTS } from '../file-path';`

## binding the objects in a export class:

<code>
export class X implements OnInit {
    objects = OBJECTS;
}
</code>

## *ngFor
*ngFor is used to iterate through arrays/arrays of objects: `*ngFor="let object of objects"`

## *ngIf
*ngIf is used to conditionally display certain data/HTML tag

## Click event binding
the syntax: <button type="button" (click)="onEvent(arguments)">

## Toggling CSS class:
<button [class.selected]="someClass"></button>


<br>

3. Create a Feature Component

The common way to create components is to make them atomic, which means every single component should perform their own action (so for example a component with log-in logic shouldn't display contact information).


## @Input() decorator
https://angular.io/guide/inputs-outputs

(Decorator is a design pattern/function that is used to separate modification or decoration of a class without modifying the original source code).

@Input decorator is used to share data between child and parent components

the example:

First import Input, then decorate the property with @Input()
<code>

import { Component, Input } from '@angular/core'; // First, import Input
export class ItemDetailComponent {
  @Input() item = ''; // decorate the property with @Input()
}

<code>

Now in the child component template you'd add this:

`<p> {{ item }} </p>`

## Angular property binding:

The next step is to bind the property in the parent component's template (In this example, the parent component template is app.component.html):

<app-item-detail> is the child selector
`[item]` is the target (@Input() property from child component)

<app-item-detail [item]="currentItem"></app-item-detail>

In the parent component class:

<code>
export class AppComponent {
    currentItem = 'someItem';
}
</code>

With `@Input()`, Angular passes the value for currentItem to the child so that the `item` renders as `someItem`

**The target in square brackets ( `[item]` ), is the property you decorate with `@Input` in the child component. The Binding source, the party to the right of the equal sign, is the data that the parent component passes to the nested component.**

## Watching for `@Input()` changes
To watch for changes on an `@Input()` property, use `OnChanges` lifecycle hook.


## Importing a hero object through `@Input`:

`@Input() hero?: Hero;`












////////////////////////////////////////////////////


## 4. Add Services - TO DO

