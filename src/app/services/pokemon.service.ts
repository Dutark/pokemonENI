import {inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";

const pokeUrl = environment.apiPoke;
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  public getPokemonsLimit(limit: number) {
    return this.http.get(`${pokeUrl}limit/${limit}`);
  }
  public getPokemonsGeneration(generation: number) {
    return this.http.get(`${pokeUrl}generation/${generation}`);
  }
  public getPokemonsById(id: number) {
    return this.http.get(`${pokeUrl}${id}`);
  }
}
