import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IItem, ISimpleGetManyRequestOkResult } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private httpClient: HttpClient) {}

  getItems(limit: number = 30) : Promise<ISimpleGetManyRequestOkResult> {
    return (this.httpClient.get(`https://pokeapi.co/api/v2/item?limit=${limit}`).toPromise() as Promise<ISimpleGetManyRequestOkResult>);
  }

  getItemByName(name : string) : Promise<IItem> {
    return (this.httpClient.get(`https://pokeapi.co/api/v2/item/${name}`).toPromise() as Promise<IItem>);
  }
  
}
