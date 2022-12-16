import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent {
  isButtonDisabled = true;
  currentPokemonName = 'bulbizarre';
  hasAddedAPokemon = false;

  pokemons: string[] = [];

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }

  onAddPokemonBtnClick() {
    this.hasAddedAPokemon = true;
    this.pokemons.push(this.currentPokemonName);
  }
}
