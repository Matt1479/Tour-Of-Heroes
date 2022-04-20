import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  // heroes = HEROES; we don't need this anymore

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // getHeroes(): void {}

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {
    this.heroes$ = this.heroService.getHeroes();
  }

  ngOnInit(): void {}
}
