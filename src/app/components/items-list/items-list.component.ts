import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/services/interfaces';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: IItem[] = [];

  constructor(private itemsService : ItemsService) {}

  async ngOnInit(): Promise<void> {
    this.items = await this.getSortedItemsPromise();
  }

  async getSortedItemsPromise(): Promise<IItem[]>{
    return new Promise(async (resolve, _ ) => {
      let tempItems : IItem[] = [];
      let response = await this.itemsService.getItems()
      let names = response.results.map(r => r.name);
      for(let name of names){
        let item = await this.itemsService.getItemByName(name)
        tempItems.push(item)
      }
      tempItems.sort((a : IItem, b : IItem) => a.id < b.id ? -1 : 1)
      resolve(tempItems)
    })
  }
}
