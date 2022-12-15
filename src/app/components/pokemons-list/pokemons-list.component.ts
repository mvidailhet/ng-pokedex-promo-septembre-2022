import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent {
  isButtonDisabled = true;

  currentPokemonName = 'bulbizarre';

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }

  onButtonClick() {
    console.log('clicked');
  }

  onInputChange(event: Event) {
    const inputElt = event.target as HTMLInputElement;
    this.currentPokemonName = inputElt.value;
    console.log(inputElt.value);
  }
}
