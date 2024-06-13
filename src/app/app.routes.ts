import {Routes} from '@angular/router';
import {PokemonsComponent} from "./pages/pokemons/pokemons.component";
import {GenerationsComponent} from "./pages/generations/generations.component";
import {PokemondetailComponent} from "./pages/pokemons/pokemondetail/pokemondetail.component";
import {ContactComponent} from "./pages/contact/contact.component";

export const routes: Routes = [
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'pokemonDetail/:id', component: PokemondetailComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: 'contact', component: ContactComponent},
];
