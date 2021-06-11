import { Component, OnInit } from '@angular/core';
import { IMove } from 'src/app/services/interfaces';
import { MovesService } from 'src/app/services/moves.service';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.css']
})
export class MovesListComponent implements OnInit {

  moves: IMove[] = [];

  constructor(private movesService : MovesService) {}

  async ngOnInit(): Promise<void> {
    this.moves = await this.getSortedMovesPromise();
  }

  async getSortedMovesPromise(): Promise<IMove[]>{
    return new Promise(async (resolve, _ ) => {
      let tempMoves : IMove[] = [];
      let response = await this.movesService.getMoves()
      let names = response.results.map(r => r.name);
      for(let name of names){
        let move = await this.movesService.getMoveByName(name)
        tempMoves.push(move)
      }
      tempMoves.sort((a : IMove, b : IMove) => a.id < b.id ? -1 : 1)
      resolve(tempMoves)
    })
  }

}
