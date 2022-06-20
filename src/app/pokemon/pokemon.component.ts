import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonList } from '../pokemon-list';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonList = PokemonList;

  constructor() { }

  ngOnInit(): void {
  }

}
