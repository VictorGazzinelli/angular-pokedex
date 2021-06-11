import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemon, ISimpleGetManyRequestOkResult } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getPokemons(limit: number = 30) : Promise<ISimpleGetManyRequestOkResult> {
    return (this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`).toPromise() as Promise<ISimpleGetManyRequestOkResult>);
  }

  getPokemonByName(name : string) : Promise<IPokemon> {
    return (this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`).toPromise() as Promise<IPokemon>);
  }
  
}
