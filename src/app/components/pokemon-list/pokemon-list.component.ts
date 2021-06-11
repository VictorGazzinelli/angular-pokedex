import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/services/interfaces';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: IPokemon[] = [];

  constructor(private pokemonService : PokemonService) {}

  async ngOnInit(): Promise<void> {
    this.pokemons = await this.getSortedPokemonsPromise();
  }

  async getSortedPokemonsPromise(): Promise<IPokemon[]>{
    return new Promise(async (resolve, _ ) => {
      let tempPokemons : IPokemon[] = [];
      let response = await this.pokemonService.getPokemons()
      let names = response.results.map(r => r.name);
      for(let name of names){
        let pokemon = await this.pokemonService.getPokemonByName(name)
        tempPokemons.push(pokemon)
      }
      tempPokemons.sort((a : IPokemon, b : IPokemon) => a.id < b.id ? -1 : 1)
      resolve(tempPokemons)
    })
  }

}
