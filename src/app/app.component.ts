import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GenerationsComponent} from "./pages/generations/generations.component";
import {PokemonsComponent} from "./pages/pokemons/pokemons.component";
import {HeaderComponent} from "./partials/header/header.component";
import {FooterComponent} from "./partials/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenerationsComponent, PokemonsComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
