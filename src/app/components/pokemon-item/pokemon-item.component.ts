import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() name = 'Bulbizarre';
  @Input() level = 10;
  sex: 'male' | 'female' = Math.random() < 0.5 ? 'male' : 'female';

  getLevel() {
    return this.level.toString();
  }
}
