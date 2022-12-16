import { Injectable } from '@angular/core';
import { Pokemon } from '../typings/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  defaultImg = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';

  pokemons: Pokemon[] = [
    {
      name: 'bulbizarre',
      picture: 'https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/764px-Dracaufeu-RFVF.png?20141019190201',
      sex: 'male',
      level: 3,
    },
    {
      name: 'carapuce',
      sex: 'female',
      picture: 'https://www.pokepedia.fr/images/thumb/1/1f/Galeking-RS.png/596px-Galeking-RS.png?20161226235218',
      level: 2,
    },
  ];

  constructor() { }

  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  deletePokemon(index: number) {
    this.pokemons.splice(index, 1);
  }

  getPokemon(name: string) {
    return this.pokemons.find((pokemon) => {
      return pokemon.name === name;
    });
  }
}
