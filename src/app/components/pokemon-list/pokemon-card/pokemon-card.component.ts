import { Component,  Input,  OnInit } from '@angular/core';
import { IPokemon } from 'src/app/services/interfaces';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  get pokemon(): IPokemon { return this._pokemon; }
  set pokemon(pokemon: IPokemon ) {this._pokemon = pokemon;}
  private _pokemon : IPokemon = {
    id: 0,
    height: 0,
    weight: 0,
    name: "",
    types: [],
    sprites: {
      front_default: "",
      back_default: "",
      front_female: null,
      back_female: null,
      back_shiny: null,
      back_shiny_female: null,
      front_shiny_female: null,
      front_shiny: null
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
