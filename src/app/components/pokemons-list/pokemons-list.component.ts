import { Component } from '@angular/core';
import { Pokemon } from 'src/app/typings/pokemon';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent {
  isButtonDisabled = true;
  currentPokemonName = 'bulbizarre';
  hasAddedAPokemon = false;

  pokemons: Pokemon[] = [
    {
      name: 'bulbizarre',
      level: 3,
    },
    {
      name: 'carapuce',
      level: 2,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }

  onAddPokemonBtnClick() {
    this.hasAddedAPokemon = true;
    this.pokemons.push({
      name: this.currentPokemonName,
      level: 1
    });
  }

  onDeletePokemon(name: string, index: number) {
    console.log(`deleting pokemon ${name}`);
    this.pokemons.splice(index, 1);
  }
}
