import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router) {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }

  onAddPokemonBtnClick() {
    this.hasAddedAPokemon = true;
    console.log(this.currentPokemonSex);
    this.pokemons.push({
      name: this.currentPokemonName,
      sex: this.currentPokemonSex,
      level: 1,
      picture: this.currentPokemonPicture,
    });
  }

  onDeletePokemon(name: string, index: number) {
    console.log(`deleting pokemon ${name}`);
    this.pokemons.splice(index, 1);
  }

  goToPokemonPage() {
    this.router.navigate(['/pokemon']);
  }
}
