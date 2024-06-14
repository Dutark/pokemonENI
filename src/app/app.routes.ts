import {Routes} from '@angular/router';
import {PokemonsComponent} from "./pages/pokemons/pokemons.component";
import {GenerationsComponent} from "./pages/generations/generations.component";
import {PokemondetailComponent} from "./pages/pokemons/pokemondetail/pokemondetail.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {LoginComponent} from "./pages/login/login.component";
import {authGuard} from "./guards/auth.guard";
import {RegisterComponent} from "./pages/register/register.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pokemons', component: PokemonsComponent, canActivate: [authGuard]},
  {path: 'pokemonDetail/:id', component: PokemondetailComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
