import {Component, inject, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PokemonService} from "../../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent implements OnInit{
  public generations?: Array<any> = [];
  private pokemonService = inject(PokemonService);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonsGeneration(6).subscribe({
      next: (generations: any) => {
        this.generations = generations;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
  goToDetail(pokemonId: number): void {
    this.router.navigate(['/pokemonDetail', pokemonId]);
  }
}
