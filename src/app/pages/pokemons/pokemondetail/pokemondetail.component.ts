import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../../services/pokemon.service";
import {Pokemon} from "../../../interfaces/pokemon";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-pokemondetail',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './pokemondetail.component.html',
  styleUrl: './pokemondetail.component.css'
})
export class PokemondetailComponent implements OnInit {
  public pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getPokemonDetails(id);
    });
  }

  getPokemonDetails(id: number): void {
    this.pokemonService.getPokemonsById(id).subscribe({
      next: (pokemon: any) => {
        this.pokemon = pokemon;
        console.log(this.pokemon);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

}
