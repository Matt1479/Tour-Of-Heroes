import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root' // metadata here
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }
}
