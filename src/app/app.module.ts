import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonsListComponent,
    HomeComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
