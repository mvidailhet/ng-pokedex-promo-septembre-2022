import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/typings/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  name?: string;
  pokemon?: Pokemon;
  defaultImg = this.pokemonService.defaultImg;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) {
    this.name = this.activatedRoute.snapshot.params['name'];
    if (!this.name) return;
    this.pokemon = this.pokemonService.getPokemon(this.name);
  }

  goToPokemonPage() {
    this.router.navigate(['/pokemon'], {
      relativeTo: this.activatedRoute,
    });
  }
}
