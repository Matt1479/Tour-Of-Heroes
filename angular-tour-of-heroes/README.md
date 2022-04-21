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

## **1. The Hero Editor**

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

## **3. Create a Feature Component**

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

## **2. Display a List.**

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

(for now I'm writing everything, I'll fix my notes later)

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

<br><br>
<br><br>

## **5. Add Navigation**

<br>

### **Add navigation with routing**

In this part we're going to:

- Add a Dashboard view
- Add the ability to navigate between the Heroes and Dashboard views
- When users click a hero name in either view, navigate to a detail view of the selected hero
- When users click a deep link in an email, open the detail view for a particular hero

### **Add the AppRoutingModule**

In Angular, the best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and improved by the root `AppModule`.

By convention, the module class name is `AppRoutingModule` and it belongs in the `app-routing.module.ts` in the `src/app` folder

Let's generate the AppRoutingModule:

`ng generate module app-routing --flat --module=app`

<br>

| Parameter      | DETAILS                                                                 |
| -------------- | ----------------------------------------------------------------------- |
| `--flat`       | Puts the file in `src/app` instead of its own folder                    |
| `--module=app` | Tells the CLI to register it in the `imports` array of the `AppModule`. |

Import the RouterModule, Routes and HeroesComponent:

```
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
```

Add routes:

```
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];
```

Modify the `@NgModule` decorator:

```
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
```

<br><br>

**First**, the `app-routing.module.ts` file imports `RouterModule` and `Routes` so the application can have routing functionality. The next import, `HeroesComponent`, will give the Router somewhere to go once you configure the routes.

Notice that the `CommonRule` references and `declarations` array are unncessary, so are no longer part of `AppRoutingModule`.

<br>
<br>

### **Routes**

The next part of the file is where you configure your routes. Routes tell the Router which view to display when a user clicks a link or paster a URL into the browser address bar.

Since `app-routing.module.ts` already imports `HeroesComponent`, you can use it in the `routes` array:

```
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];
```

A typical Angular `Route` has two properties:

| PROPERTIES  | DETAILS                                                                    |
| ----------- | -------------------------------------------------------------------------- |
| `path`      | A string that matches the URL in the browser address bar.                  |
| `component` | The Component that the router should create when navigating to this route. |

This tells the router to match that URL to `path: 'heroes'` and **display** the `HeroesComponent` when the **URL** is something like `localhost:4200/heroes`

### **RouterModule.forRoot()**

The `@ngModule` metadata initializes the router and starts it listening for browser location changes.

The following line adds the `RouterModule` to the `AppRoutingModule`, `imports` array and configures it with the `routes` in one step by calling `RouterModule.forRoot()`:

`imports: [ RouterModule.forRoot(routes) ]`

**The method is called `forRoot()` because you configure the router at the application's root level. The `forRoot()` method supplies the service providers and directives needed for routing, and performs the initial navigation based n the curretn browser URL.**

Next, `AppRoutingModule` exports `RouterModule` so it will be available throught the application: `exports: [ RouterModule ]`

### **Add RouterOutlet**

In the `AppComponent` template replace the `<app-heroes>` element with a `<router-outlet>` element.

The `AppComponent` template no longer needs `<app-heroes>` because the application will only display the `HeroesComponent` when the user navigates to it.

The `<router-outlet>` tells the router where to display routed views.

The `RouterOutlet` is one of the router directives that became available to the `AppComponent` because `AppModule` imports `AppRoutingModule` which exported `RouterModule`. The `ng generate` command you ran at the start of this tutorial added this import because of the `-- module=app` flag. If you manually created `app-routing.module.ts` or used a tool other than the CLI to do so, you'll need to import `AppRoutingModule` into `app.module.ts` and add it to the `imports` array of the `NgModule`.

**Now** after adding /heroes to the URL the browser should display the list of heroes.

### **Add a navigation link (routerLink)`**

Ideally, users should be able to click a link to navigate rather than pasting a route URL into the address bar.

Add a `<nav>` element and, within that, an anchor element that, when clicked, triggers navigation to the `HeroesComponent`. The revised `AppComponent` template looks like this:

```
<h1>{{ title }}</h1>

<nav>
  <a routerLink="/heroes">Heroes</a>
</nav>

<router-outlet></router-outlet>
<app-messages></app-messages>
```

A `routerLink` attribute is set to `"/heroes"`, the string that the router matches to the route to `HeroesComponent`. The `routerLink` is the selector for the `RouterLink` directive that turns user clicks into router navigations. It's another of the public directives in the `RouterModule`.

The browser refreshes and displays the application title and heroes link, but not the heroes list.

After clicking the link, the address bar updates to `/heroes` and the list of heroes appears.

### **Add a dashboard view**

Routing makes more sense when there are multiple views. So far there's only the heroes view.

Add a `DashboardComponent` using the CLI:

`ng generate component dashboard`

The CLI generates the files for the `DashboardComponent` and declares it in `AppModule`.

Add this code into the `DashboardComponent`:
https://angular.io/tutorial/toh-pt5#add-a-dashboard-view

`slice(x,y)` method returns selected elements in an array, as a new array.

`x` == starting index
`y` == ending index

/////

The _template_ presents a grid of hero name links.

- The `*ngFor` repeater creates as many links as are in the component's `heroes` array.
  ```
  <a *ngFor="let hero of heroes">
    {{hero.name}}
  </a>
  ```
- The links are styled as colored blocks by the `dashboard.component.css`.

<br>

The _class_ is similar to the `HeroesComponent` class.

- It defines a `heroes` array property
- The constructor expects Angular to inject the `HeroService` into a private `heroService` property
- The `ngOnInit()` lifecycle hook calls `getHeroes()`

This `getHeroes()` returns the sliced list of heroes at positions 1 and 5, returning only four of the Top Heroes (2nd-5th).

```
getHeroes(): void {
  this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1, 5));
}
```

### **Add the dashboard route**

To navigate to the dashboard, the router needs an appropriate route.

Import the `DashboardComponent` in the `app-routing-module.ts` file:

`import { DashboardComponent } from './dashboard/dashboard.component';`

Add a route to the `routes` array that matches a path to the `DashboardComponent`:

`{ path: 'dashboard', component: DashboardComponent }`

### **Add a default route**

When the application starts, the browser's address bar points to the web site's root. That doesn't match any existing route so the router doesn't navigate anywhere. The space below the `<router-outlet>` is blank.

To make the application navigate to dashboard automatically, add the following route to the `routes` array:

`{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }`

This route redirects a URL that fully matches the empty path to the route whose path is `'/dashboard'`.

After the browser refreshes, the router loads the `DashboardComponent` and the browser address bar shows the `/dashboard` URL.

<br>

### **Add dashboard link to the shell**

The user should be able to navigate back and forth between the `DashboardComponent` and the `HeroesComponent` by clicking links in the navigation area near the top of the page.

<br>

Add a dashboard navigation link to the `AppComponent` shell tmplate, just above the _Heroes_ link: `<a routerLink="/dashboard">Dashboard</a>`

After the browser refreshes you can navigate freely between the two views by clicking the links.

<br>
<br>

### **Navigating to hero details**

The `HeroDetailComponent` displays details of a selected hero. At the moment the `HeroDetailComponent` is only visible at the bottom of the `HeroesComponent`.

<br>

The user should be able to get to these details in three ways:

1. By clicking a hero in the dashboard.
2. By clicking a hero in heroes list.
3. By pasting a "deep link" URL into the browser bar that identifies the hero to display.

In this section we'll enable the navigation to the `HeroDetailComponent` and liberate it (set free) from the `HeroesComponent`.

### **Delete _hero details_ from HeroesComponent**

When user clicks a hero item in the `HeroesComponent`, the application should navigate to the `HeroDetailComponent`, replacing the heroes list view with the hero detail view. The heroes list view should no longer show hero details as it does now.

Open the `HeroesComponent` template and delete the `<app-hero-detail> element from the bottom.

Clicking a hero now does nothing. We'll fix it after enabling routing to the `HeroDetailComponent`.

### **Add a _hero detail_ route**

A URL like `~/detail/11` would be a good URL for navigating to the _Hero Detail_ view of the hero whose `id` is `11`.

Open `app-routing.module.ts` and import `HeroDetailComponent`:

`import { HeroDetailComponent } from './hero-detail/hero-detail.component';`

Then add a _parameterized_ route to the `routes` array that matches the path pattern to the _hero detail_ view:

`{ path: 'detail/:id', component: HeroDetailComponent }`

The colon (`:`) character in the `path` indicates that `:id` is a placeholder for a specific hero `id`.

At this point, all application routes are in place.

```
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];
```

### **DashboardComponent hero links**

The `DashboardComponent` hero links do nothing at the moment.

Now that the router has a route to `HeroDetailComponent`, fix the dashboard hero links to navigate using the _parameterized_ dashboard route:

```
<a *ngFor="let hero of heroes"
  routerLink="/detail/{{hero.id}}">
  {{hero.name}}
</a>
```

You're using Angular interpolation binding ( `{{value}}` ) within the `*ngFor` repeater to inser the current iteration's `hero.id` into each `routerLink`.

<br>

### **HeroesComponent hero links**

The hero items in the `HeroesComponent` are `<li>` elements whose click events are bound to the component's `onSelect()` method:

```
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <button type="button" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span>
      <span class="name">{{hero.name}}</span>
    </button>
  </li>
</ul>
```

Strip the `<li>` back to just its `*ngFor`, wrap the badge and name in an anchor (`<a>`) element, and add a `routerLink` attribute to the anchor that is the same as in the dashboard template:

```
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <a routerLink="/detail/{{hero.id}}">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </a>
  </li>
</ul>
```

### **Remove dead code**

While the `HeroesComponent` class still works, the `onSelect()` method and `selectedHero` property are no longer used.

Let's tidy up the HeroesComponent class:

```
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
```

<br>

### **Routable HeroDetailComponent**

Previously, the parent `HeroesComponent` set the `HeroDetailComponent.hero` property and the `HeroDetailComponent` displayed the hero.

`HeroesComponent` doesn't do that anymore. Now the router creates the `HeroDetailComponent` in response to URL such as `~/detail/11`.

The `HeroDetailComponent` needs a new way to obtain the hero-to-display. This section explains the following:

- Get the route that created it
- Extract the `id` from the route
- Acquire the hero with that `id` from the server using the `HeroService`

<br>

Add the following imports (into hero-detail.component.ts):

```
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
```

Inject the `ActivatedRoute`, `HeroService`, and `Location` services into the constructor, saving their values in private fields:

```
constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
) {}
```

<br>

The `ActivatedRoute` holds information about the route to this instance of the `HeroDetailComponent`. This component is interested in the route's parameters extracted from the URL. The "id" parameter id the `id` of the hero to display.

The `HeroService` gets hero data from the remote server and this component will use it to get the hero-to-display.

The `Location` is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.

<br>

### **Extract the id route parameter**

In the `ngOnInit()` lifecycle hook call the `getHero()` and define it as follows:

```
ngOnInit(): void {
  this.getHero();
}

getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
}
```

The `route.snapshop` is a static image of the route information shortly after the component was created.

The `paramMap` is a dictionary of route parameter values extracted from the URL. The `"id"` key returns `id` of the hero to fetch.

<br>

Route parameters are always strings. The JavaScript `Number` function converts the string to a number, which is what a hero `id` should be.

<br>

### **Add HeroService.getHero()**

In the `HeroService` add the following `getHero()` method with the `id` after `getHeroes()` method:

```
getHero(id: number): Observable<Hero> {
  // For now, assume that a hero with the specified `id` always exists.
  // Error handling will be added in the next step of the tutorial.
  const hero = HEROES.find(h => h.id === id)!;
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(hero);
}
```

The backtick (\`) characters define a JavaScript template literal for embedding the `id` (`${id}`)/

Like the `getHeroes()`, `getHero()` has asynchronous signature. It returns a _mock hero_ as an `Observable`, using the RxJS `of()` function.

You'll be able to re-implement `getHero` as a real `Http` request without having to change the `HeroDetailComponent` that calls it.

### **Try it**

Click on a hero in the dashboard or in the heroes list and navigate to that hero's detail view.

If you paste `localhost:4200/detail/11` in the browser address bar, the router will navigate to the detail view for the hero with `id: 11`, "Dr Nice".

### **Find the way back**

Let's add a _go back_ button:
`<button type="button" (click)="goBack()">go back</button>`

Add a `goBack()` method to the component class that navigates backward one step in the browser's history stack using the `Location` service that we injected previously

```
goBack(): void {
  this.location.back();
}
```

<br><br>
<br><br>

## **6. Get data from a server**

In this section we'll add the following data persistence (stored data won't disappear) features with help from Angular's `HttpClient`.

- The `HeroService` gets hero data with HTTP requests
- Users can add, edit, and delete heroes and save these changes over HTTP
- Users can search for heroes by name

<br>

### **Enable HTTP services**

`HttpClient` is Angular's mechanism for communicating with a remote server over HTTP.

Make `Httpclient` available everywhere in the application in two steps. First add it to the root `AppModule` by importing it:

`import { HttpClientModule } from '@angular/common/http';`

Next, still in the `AppModule`, add `HttpClientModule` to the `imports` array:

```
@NgModule({
  imports: [
    HttpClientModule,
  ],
})
```

### **Simulate a data server**

This tutorial sample mimics communication with a remote data server by using the <a href="https://github.com/angular/angular/tree/master/packages/misc/angular-in-memory-web-api">In-memory Web API</a> module.

After installing the module, the application will make requests to and receive responses from the `HttpClient` without knowing that the _In-memory Web API_ is intercepting those requests, applying them to an in-memory data store, and returning simulated responses.

<br>

By using the In-memory Web API, you won' have to set up a server to leran about `HttpClient`.

(The In-memory Web API module has nothing to do with HTTP in Angular.)

<br>

Install the In-memory Web API package from npm with the following command:

`npm install angular-in-memory-web-api --save`

In the `AppModule`, import the `HttpClientInMemoryWebApiModule` and add the `InMemoryDataService` class, which you will create in a moment:

`import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';`
`import { InMemoryDataService } from './in-memory-data.service';`

After the `HttpClientModule`, add the `HttpClientInMemoryWebApiModule` to the `AppModule` `imports` array and configure it with the `InMemoryDataService`:

```
HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
```

The `ForRoot()` configuration method takes an `InMemoryDataService` class that primes the in-memory database.

Generate the class `src/app/in-memory-data.service.ts` with the following command:

`ng generate service InMemoryData`

Replace the default contents of `in-memory-data.service.ts` with the following:

```
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
```

The `in-memory-data.service.ts` file will take over the function of `mock-heroes.ts`. However, don't delete `mock-heroes.ts` yet, as you still need it for a few more steps of this tutorial.

When the server is ready, you'll detach (disconnect) the In-memory Web Api, and the application's requests will go through to the server.

### **Heroes and HTTP**

In the `HeroService`, import `HttpClient` and `HttpHeaders`:

`import { HttpClient, HttpHeaders } from '@angular/common/http';`

Still in the `HeroService`, inject `HttpClient` into the constructor in a private property called `http`.

```
constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
```

Notice that you keep injecting the `MessageService` but since you'll call it so frequently, wrap it in a private `log()` method:

```
/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
```

Define the `heroesURL` of the form `:base/:collectionName` with the address of the heroes resource on the server. Here `base` is the resource to which requests are made, and `collectionName` is the heroes data object in the `in-memory-data-service.ts`:

`private heroesURL = 'api/heroes'; // URL to web api`

<br>

#### **Get heroes with HttpClient**

The current `HeroService.getHeroes()` uses RxJS `of()` function to return an array of mock heroes as an `Observable<Hero[]>`:

```
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
}
```

Convert that method to use `HttpClient` as follows:

```
/** GET heroes from the server */
getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesURL)
}
```

Now the data loads from the mock server.

You've swapped `of()` for `http.get()` and the application keeps working without any other changes because both functions return an `Observable<Hero[]>`.

#### **HttpClient methods return one value**

All `HttpClient` methods return an RxJS `Observable` of something.

HTTP is a request/response protocol. You make a request, it returns a single response.

In general, an observable _can_ return multiple values over time. An observable from `HttpClient` always emits a single value and then completes, never to emit again.

This particular `HttpClient.get()` call returns an `Observable<Hero[]>`; that is, "_an observable of hero arrays_". In practice, it will only return a single hero array.

#### **HttpClient.get() returns response data**

`HttpClient.get()` returns the body of the response as an untyped JSON object by default. Applying the optional type specifier, `<Hero[]>`, adds TypeScript capabilities, which reduce errors during compile time.

The server's data API determines the shape of the JSON data. The _Tour of Heroes_ data API returns the hero data as an array.

`.`

Other APIs may bury the data that you want within an object. You might have to dig that data out by processing the `Observable` result with the RxJS `map()` opertator.

`.`

#### **Error handling**

Things go wrong, especially when you're getting data from a remote server. The `HeroService.getHeroes()` method should catch errors and do something appropriate.

To catch errors, you **"pipe" the observable** result from `http.get()` through an RxJS `catchError()` operator.

Import the `catchError` symbol from `rxjs/operators`, along with some other operators you'll need later:

`import { catchError, map, tap } from 'rxjs/operators';`

<br>

Now extend the observable result with the `pipe()` method and give it a `catchError()` operator:

```
getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
}
```

The `catchError()` operator intercepts an **`Observable` that failed**. The operator then passes the error to the error handling function.

The following `handleError()` method reports the error and then returns an innocuous(harmless) result so that the application keeps working.

#### **handleError**

The following `handleError()` will be shared by many `HeroService` methods so it's generalized to meet their different needs.

Instead of handling the error directly, it returns an error handler function to `catchError` that it has configured with both the name of the operation that failed and a safe return value:

```
/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
```

After reporting the error to the console, the handler constructs a user friendly message and returns a safe value to the application so the application can keep working.

Because each service method returns a different kind of `Observable` result, `handleError()` takes a type parameter so it can return the safe value as the type that the application expects.

<br>

#### **Tap into the Observable**

The `HeroService` methods will tap into the flow of observable values and send a message, using the `log()` method, to the message area at the bottom of the page.

They'll do that with the RxJS `tap()` operator, which looks at the observable values, does something with those values and passes them along. The `tap()` call back doesn't touch the values themselves.

Here is the final version of `getHeroes()` with the `tap()` that logs the operation:

```
/** GET heroes from the server */
getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
}
```

#### **Get hero by id**

Most web APIs support a _get by id_ request in the form `:baseURL/:id`.

Here, the _base URL_ is the `heroesURL` defined in the api/heroes (<a href="https://angular.io/tutorial/toh-pt6#heroes-and-http">this section</a>) and _id_ is the number of the hero that you want to retrieve. For example, `api.heroes/11`.

Update the `HeroService` `getHero()` method with the following to make that request:

```
/** GET hero by id. Will 404 if id not found */
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}
```

There are three significant differences from `getHeroes()`:

- `getHero()` constructs a request URL with the desired hero's id
- The server should respond with a single hero rather than an array of heroes
- `getHero()` returns an `Observable<Hero>`("_an observable of Hero objects_") rather than an observable of hero _arrays_

### **Update heroes**

Next...
