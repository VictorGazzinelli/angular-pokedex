export interface INameUrlItem {
  name: string,
  url: string
}

export interface ISimpleGetManyRequestOkResult {
  count: number,
  next: string | null,
  previous: string | null,
  results: INameUrlItem[]
}

export interface IPokemon {
  id: number,
  name: string,
  height: number,
  weight: number,
  sprites: ISprites,
  types: ITypes[]
  /* Some additional props*/
}

export interface ISprites {
  back_default: string,
  back_female: string| null,
  back_shiny: string| null,
  back_shiny_female: string| null,
  front_default: string,
  front_female: string| null,
  front_shiny: string| null,
  front_shiny_female:null
}

export interface IItemSprites {
  default: string,
}

export interface ITypes {
  slot: number
  type: INameUrlItem
}

export interface IMove {
  id: number,
  name: string,
  power: number,
  accuracy: number,
  pp: number,
}

export interface IItem {
  id: number,
  name: string,
  sprites: IItemSprites
  effect_entries: IEffectEntry[]
}

export interface IEffectEntry {
  effect: string
}
