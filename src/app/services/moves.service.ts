import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMove, ISimpleGetManyRequestOkResult } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovesService {
  constructor(private httpClient: HttpClient) {}

  getMoves(limit: number = 30) : Promise<ISimpleGetManyRequestOkResult> {
    return (this.httpClient.get(`https://pokeapi.co/api/v2/move?limit=${limit}`).toPromise() as Promise<ISimpleGetManyRequestOkResult>);
  }

  getMoveByName(name : string) : Promise<IMove> {
    return (this.httpClient.get(`https://pokeapi.co/api/v2/move/${name}`).toPromise() as Promise<IMove>);
  }
  
}
