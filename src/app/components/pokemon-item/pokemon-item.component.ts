import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, PokemonSex } from 'src/app/typings/pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() name = 'Bulbizarre';
  @Input() level = 10;
  @Input() picture?: string;
  @Input() sex: PokemonSex = 'male';
  @Output() onDelete = new EventEmitter<string>();

  constructor(private pokemonService: PokemonService) {

  }

  defaultImg = this.pokemonService.defaultImg;

  getLevel() {
    return this.level.toString();
  }

  onDeleteBtnClick() {
    this.onDelete.emit(this.name);
  }
}
