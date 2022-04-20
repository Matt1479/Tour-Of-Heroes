import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root', // metadata here
})
export class HeroService {
  getHeroes(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added later
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private messageService: MessageService) {}
}
