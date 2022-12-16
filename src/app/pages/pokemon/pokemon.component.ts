import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  name?: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.name = this.activatedRoute.snapshot.params['name'];
  }

  goToPokemonPage() {
    this.router.navigate(['/pokemon'], {
      relativeTo: this.activatedRoute,
    });
  }

}
