import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonSex } from 'src/app/typings/pokemon';

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

  defaultImg = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';

  getLevel() {
    return this.level.toString();
  }

  onDeleteBtnClick() {
    this.onDelete.emit(this.name);
  }
}
