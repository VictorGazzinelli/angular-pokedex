import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-list/pokemon-card/pokemon-card.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { MovesCardComponent } from './components/moves-list/moves-card/moves-card.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemsCardComponent } from './components/items-list/items-card/items-card.component';

const routes : Routes = [ 
  { path: 'pokemon', component: PokemonListComponent},
  { path: 'items', component: ItemsListComponent},
  { path: 'moves', component: MovesListComponent},
  { path: '', redirectTo: '/pokemon', pathMatch: 'full'},
];

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
