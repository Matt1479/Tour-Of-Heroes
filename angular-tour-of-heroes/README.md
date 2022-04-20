a# Tour of Heroes notes

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

selector The component's CSS element selector.

templateUrl The location of the component's template file.

styleUrls The location of the component's private CSS styles.

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
` BrowserModule,`
` FormsModule`
`],`

### Declaring a component

Every component must be declared in exactly one NgModule (in the app.module.ts file).

for example:

`import { HeroesComponent } from './heroes/heroes.component';`

The HeroesComponent is declared in the @NgModule.declarations array.

`declarations: [`
` AppComponent,`
` HeroesComponent`
`],`

## 2. Display a List

### \*ngFor

The \*ngFor is Angular's repeater directive. It repeats the host element for each element in a list.

sample syntax: <li \*ngFor="let item of items"></li>

The syntax in this example is as follows:

<li>	The host element.

items Holds the items list from the Component class, the items list.

item Holds the current item object for each iteration through the list.

### Event binding

a button with a click event binding:

<button type="button" (click)="someFunction()"></button>

### \*ngIf

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

<br><br>
<br><br>

////////////////////////////////////////////////////

## A do-over for a better understanding (1-3)

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

1. **The Hero Editor**

### Generating new component:

`ng generate component componentName`

The @Component decorator function:

<code>

@Component({

selector: 'app-heroes',

templateUrl: './heroes.component.html',

styleUrls: ['./heroes.component.css']

})

<br>

</code>

selector - is the component's CSS element selector

templateURL - is the location of the component's template(HTML) file

styleURLs - is the location of the component's private CSS styles

**Always export the component class so you can import it elsewhere.**

To display a child component within a parent component use the <app-component-name></app-component-name> component element selector (the same as in the @Component decorator function)

<br>

### **Interface**

Interface is basically a class without initialization nor implementation for methods/properties

<br>

### **Pipes**:

Pipes are used to format strings, currency amounts, dates and other display data, the syntax looks like this {{ object.property | pipeName }}

<br>

### **Two-way binding:**

In Angular we use `[(ngModel)]` for two-way data binding
for example you can bind an input value and a header content so both of them will display the same thing

for the `[(ngModel)]` to work we need to import FormsModule into app.module.ts

<br>

### **AppModule**

The AppModule (app.module.ts) is used to declare the application components in order to display them.

<br>
<br>

2. **Display a List.**

## exporting an array of objects:

`export const OBJECTS: Object[] = [ { id: 0, name: 'obj0' } { id: 1, name: 'obj1' } ];`

## importing an array of objects into a different file:

`import { OBJECTS } from '../file-path';`

## binding the objects in a export class:

```
export class X implements OnInit {
    objects = OBJECTS;
}
```

## **\*ngFor**

*ngFor is used to iterate through arrays/arrays of objects: `*ngFor="let object of objects"`

## **\*ngIf**

\*ngIf is used to conditionally display certain data/HTML tag

<br>

## **Click event binding**

the syntax: `<button type="button" (click)="onEvent(arguments)">`

## **Toggling CSS class:**

`<button [class.selected]="someClass"></button>`

<br>
<br>
<br>

3. **Create a Feature Component**

The common way to create components is to make them atomic, which means every single component should perform their own action (so for example a component with log-in logic shouldn't display contact information).

<br>

## **@Input() decorator**

https://angular.io/guide/inputs-outputs

(<a href="decorator">Decorator</a> is a design pattern/function that is used to separate **modification** or **decoration** of a class **without modifying the original source code**).

**@Input** decorator is used to share data between **child** and **parent** components

the example:

First import Input, then decorate the property with **@Input()**

```
import { Component, Input } from '@angular/core'; // First, import Input
export class ItemDetailComponent {
  @Input() item = ''; // decorate the property with @Input()
}
```

Now in the child component template you'd add this(which is called the Interpolation binding syntax):

`<p> {{ item }} </p>`

<br>

## **Angular property binding:**

<br>

The next step is to bind the property in the parent component's template (In this example, the parent component template is app.component.html):

<app-item-detail> is the child selector
`[item]` is the target (@Input() property from child component)

`<app-item-detail [item]="currentItem"></app-item-detail>`

<br>

In the parent component class:

```
export class AppComponent {
    currentItem = 'someItem';
}
```

With `@Input()`, Angular passes the value for currentItem to the child so that the `item` renders as `someItem`

<br>

**The target in square brackets ( `[item]` ), is the property you decorate with `@Input` in the child component. The Binding source, the party to the right of the equal sign, is the data that the parent component passes to the nested component.**

<br>

## **Watching for `@Input()` changes**

To watch for changes on an `@Input()` property, use `OnChanges` lifecycle hook.

<br>

## **Importing a hero object through `@Input`:**

`@Input() hero?: Hero;`

<br>

////////////////////////////////////////////////////

<br><br>
<br><br>

## 4. **Add Services**

<br>

### **Services in Angular**

Services are a way of sharing data among classes that _don't know each other_. Services in Angular are being created using Dependency Injection (read below) instead of the new keyword (which creates an instance of user-defined object type).

### **Dependency Injection in Angular**

Dependencies are services or objects that a class needs to perform its function. Dependency Injection, or DI, is a design pattern in which **class requests** dependencies from **external sources** rather than creating them.

<br>

### **Creating the service**

`ng generate service serviceName`

<br>

### `@Injectable()` services

the `export class nameOfService {}` class is going to provide an injectable service, and it can also have its own injected dependencies

The `@Injectable()` decorator accepts a metadata object from the service, the same way `@Component()` decorator did for the component classes (e.g. selector).

<br>

### **Get hero(object) data**

The `HeroService` could get hero data from anywhere - a web service, local storage, or a mock data source.

Removing data access from components means you can change your mind about the implementation anytime, without touching any components.

We're going to implement mock data delivery

Import the `Class` and `OBJECTS`:

```
import { Class } from './path';
import { OBJECTS } from './path';
```

Add a getObjects method to return an array of objects:

```
getObjects(): Object[] {
    return OBJECTS;
}
```

### **Providing the service**

You must make the (Hero)service available to the DI system before Angular can _inject_ it into the (Heroes)component by registering provider.
A **provider** is something that can create or deliver a service;

To make sure that the HeroService can provide this service, register it with the _injector_, which is the object that is responsible for choosing and injecting the provider where the application requires it.

By default, the Angular CLI command `ng generate service` registers a provider with the root _injector_ for your service by including provider metadata, that is `prodidedIn: 'root'` in the `@Injectable()` <a href="#decorator">decorator</a>:

```
@Injectable({
  providedIn: 'root',
})
```

When you provide a service at the root level, Angular creates a single, shared instance of `HeroService` and injects into any class that asks for it. Registering the provider in the `@Injectable` metadata also allows Angular to optimize an application by removing the service if it turns out to be not used after all.

Now let's inject the `(Hero)Service` into the `(Heroes)Component`

### **Update (Heroes)Component**

the whole process is here: https://angular.io/tutorial/toh-pt4#update-heroescomponent

### **Calling methods in ngOnInit() instead of in constructors**

Generally you should call methods in ngOnInit() instead of in constructors. The reason is: it's not what the constructor should do, the constructor is here only to do minimal initialization such as wiring constructor parameters to properties.

Instead call the method inside the **ngOnInit lifecycle hook** and let Angular call ngOnInit() at an appropriate time _after_ constructing a `(Heroes)Component` instance.

```
ngOnInit(): void {
    this.someMethod(); // *this* refers to an object in this case
}
```

<br>
<br>

### **Observables in Angular**

Observables provide support for passing messages between parts of your application

<br>
<br>

### **Observable data**

The `HeroService.getHeroes()` method has a synchronous signature, which implies that the HeroService can fetch heroes synchronously.

**Synchronous request**: A synchronous request blocks the client until operation completes. In such case, javascript engine of the browser is blocked. This kind of requests is being deprecated.

**Asynchronous request**: An asynchronous request doesn't block the client e.g. browser is responsive. At that time, user can perform another operations also. In such case, javascript engine of the browser is not blocked.

<br>
<br>

`this.heroes = this.heroService.getHeroes();`

This will not work in a real application. It only works now because our service currently returns _mock heroes_. But soon the application will fetch heroes from a remote server, which is an inherently _asynchronous_ operation.

The `HeroService` must wait for the server to respond, `getHeroes()` method cannot return immediately with hero data, and the browser will not block while the service waits.

`HeroService.getHeroes()` must have an _asynchronous signature_ of some kind.

In this project, `HeroService.getHeroes()` will return an `Observable` because it will eventually use the Angular `HttpClient.get` method to fetch the heroes and `HttpClient.get()` returns an `Observable`.

<br>
<br>

### **Using observables to pass values**

Observables provide support for passing messages between parts of your application. They are used frequently in Angular and are a technique for event handling, asynchronous programming, and handling multiple values.

The observer pattern is a software design pattern in which an object called the _subject_, maintains a list of its dependents, called _observers_, and notifies them automatically of state changes. This pattern is similar (but not identical) to the publish/subscribe design pattern.

Observatives are declarative - that is, you define a function for publishing values, but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notification until the function completes, or until they unsubscribe.

An observable can deliver multiple values of any type - literals, messages, or events, depending on the context.

The API for receiving values is the same whether the values are delivered synchronously or asynchronously.

Because setup and teardown logic are both handled by the observable, your application code only needs to worry about subscribing to consume values, and when done, unsubscribing. Whether the stream was keystrokes, an HTTP response, or an internal timer, the interface for listening to values and stopping listening is the same.

<br>

Because of these advantages, observatives are used extensively within Angular, and for application development as well.

<br>

### **Basic usage and terms**

As a publisher, you create an `Observable` instance that defines a _subscriber_ function. This is the function that is executed when a consumer calls the `subscribe()` method. The subscriber function defines how to obtain or generate values or messages to be published.

To execute the observable you have created and begin receiving notifications, you call its `subscribe()` method, passing an _observer_. This is a JavaScript object that defines the handlers for the notifications you receive. The `subscribe()` call returns a `Subscription` object that has an `unsubscribe()` method, which you call to stop receiving notifications.

### **Defining observers**

A handler for receiving observable notifications implements the `Observer` interface. It is an object that defines callback methods to handle the three types of notifications that an observable can send:

| NOTIFICATION TYPE | DETAILS                                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Next`            | Required. A handler for each delivered value. Called zero or more times after execution starts                                                           |
| `Error`           | Optional. A handler for an error notification. An error halts execution of the observable instance                                                       |
| `complete`        | Optional. A handler for the execution-complete notification. Delayed values can continue to be delivered to the next handler after execution is complete |

|

An observer object can define any combination of these handlers. If you don't supply a handler for a notification type, the observer ignores notifications of that type.

### **Subscribing**

An `Observable` instance begins publishing values only when someone subscribes to it. You subscribe by calling the `subscribe()` method of the instance, passing an observer object to receive the notifications.

<br><br>
<br>

### **Observable HeroService**

In this example we'll simulate getting data from the server with RxJS `of()` function

Import the `Observable` and `of` symbols from RxJS into `HeroService`:

`import { Observable, of } from 'rxjs';`

Replace the `getHeroes()` method with the following:

```
getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
}
```

<br>

### **Subscribe in HeroesComponent**

The `HeroService.getHeroes` method used to return a `Hero[]`. Now it returns an `Observable<Hero[]>`.

Now I have to adjust to that difference in `HeroesComponent`.

<br>

Replace the `getHeroes` method with the following code:

```
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
```

`Observable.subscribe()` is the critical difference.

<br>

The previous version assigns an array of heroes to the component's `heroes` property. The assignment occurs _synchronously_, as if the server could return heroes instantly or the browser could freeze UI while it waited for the server's response.

This won't work when the `HeroService` is actually making requests of a remote server.

<br>

The new version waits for the `Observable` to emit the array of heroes - which could happen now or several minutes from now. The `subscribe()` method passes the emitted array to the callback, which sets the component's `heroes` property.

This asynchronous approach will work when the `HeroService` requests heroes from the server.

<br>
<br>

back to the services

### **Show messages**

### **Create MessagesComponent**

`ng generate component messages`

### **Create the MessageService**

`ng generate service messsage`

The MessageService methods:

```
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
```

Inject it into the HeroService: `import { MessageService } from './message.service';`

Modify the constructor: `constructor(private messageService: MessageService) { }`

Send a message from HeroService: `this.messageService.add('HeroService: fetched heroes');`

Display the message from HeroService: `import { MessageService } from '../message.service';`

Modify the constructor (in the messages component): `constructor(public messageService: MessageService) {}`

Bind to the MessageService (in the MessagesComponent template):

```
<div *ngIf="messageService.messages.length">

  <h2>Messages</h2>
  <button
  type="button"
  class="clear"
  (click)="messageService.clear()"
  >Clear messages</button>
  <div *ngFor='let message of messageService.messages'> {{message}} </div>

</div>
```

This template binds directly to the component's `messageService`.

|                       | DETAILS                                                        |
| --------------------- | -------------------------------------------------------------- |
| `*ngIf`               | Only displays the messages area if there are messages to show. |
| `*ngFor`              | Presents the list of messages repeated in `<div>` elements.    |
| Angular event binding | Binds the button's click event to `MessageService.clear()`     |

<br>
<br>

## NEXT: Add Navigation.
