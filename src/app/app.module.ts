import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-list/pokemon-card/pokemon-card.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { MovesCardComponent } from './components/moves-list/moves-card/moves-card.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemsCardComponent } from './components/items-list/items-card/items-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonListComponent,
    PokemonCardComponent,
    MovesListComponent,
    MovesCardComponent,
    ItemsListComponent,
    ItemsCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
