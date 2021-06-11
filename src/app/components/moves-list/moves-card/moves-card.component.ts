import { Component, Input, OnInit } from '@angular/core';
import { IMove } from 'src/app/services/interfaces';

@Component({
  selector: 'app-moves-card',
  templateUrl: './moves-card.component.html',
  styleUrls: ['./moves-card.component.css']
})
export class MovesCardComponent implements OnInit {

  @Input()
  get move(): IMove { return this._move; }
  set move(move: IMove ) {this._move = move;}
  private _move : IMove = {
    id: 0,
    name: "",
    power: 0,
    accuracy: 0,
    pp: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
