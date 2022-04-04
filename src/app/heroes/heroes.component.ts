import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero/hero.component';
import { HEROES } from '../mock-heroes/mock-heroes.component';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  constructor() { }


  ngOnInit(): void {
  }

}
