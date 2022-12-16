import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, PokemonSex } from 'src/app/typings/pokemon';



@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent {
  isButtonDisabled = true;
  currentPokemonName = 'bulbizarre';
  currentPokemonPicture?: string;
  currentPokemonSex: PokemonSex = 'male';
  hasAddedAPokemon = false;

  pokemons: Pokemon[] = this.pokemonService.pokemons;

  constructor(private router: Router, private pokemonService: PokemonService) {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }

  onAddPokemonBtnClick() {
    this.hasAddedAPokemon = true;

    this.pokemonService.addPokemon({
      name: this.currentPokemonName,
      sex: this.currentPokemonSex,
      level: 1,
      picture: this.currentPokemonPicture,
    });
  }

  onDeletePokemon(name: string, index: number) {
    console.log(`deleting pokemon ${name}`);
    this.pokemonService.deletePokemon(index);
  }

  goToPokemonPage() {
    this.router.navigate(['/pokemon']);
  }
}
