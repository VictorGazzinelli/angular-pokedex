import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/app/services/interfaces';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.css']
})
export class ItemsCardComponent implements OnInit {

  @Input()
  get item(): IItem { return this._item; }
  set item(item: IItem ) {this._item = item;}
  private _item : IItem = {
    id: 0,
    name: "",
    effect_entries: [],
    sprites: {
      default: ''
    }
    
  };

  constructor() { }

  ngOnInit(): void {
  }

}
