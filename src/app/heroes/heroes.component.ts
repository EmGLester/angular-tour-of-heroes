import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero/hero.component';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  constructor() { }


  ngOnInit(): void {
  }

}
