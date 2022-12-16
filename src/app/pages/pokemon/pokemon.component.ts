import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  goToPokemonPage() {
    this.router.navigate(['/pokemon'], {
      relativeTo: this.activatedRoute,
    });
  }

}
