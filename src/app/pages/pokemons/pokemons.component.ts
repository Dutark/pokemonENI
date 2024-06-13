import {Component, inject, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PokemonService} from "../../services/pokemon.service";
import {RouterLink} from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})

export class PokemonsComponent implements OnInit {
  public pokemons: Array<any> = [];
  private pokemonService = inject(PokemonService);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons() {
    this.pokemonService.getPokemonsLimit(48).subscribe({
      next: (pokemons: any) => {
        this.pokemons = pokemons;
        console.log(this.pokemons);
      },
      error: (error): any => {
        console.log(error);
      }
    })
  }

  goToDetail(pokemonId: number): void {
    this.router.navigate(['/pokemonDetail', pokemonId]);
  }
}
