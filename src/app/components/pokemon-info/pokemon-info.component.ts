import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  pokemonInfo: any = {}
  
  constructor(private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApi.getPokemonDetail(localStorage.getItem("pokeID")).subscribe(
      (pokemon: any)=> {
        console.log(pokemon);
        for(let j = 0; j < pokemon.Types.length; j++){
          console.log(pokemon.Types[j].type);
          pokemon.Types[j].type.name = pokemon.Types[j].type.name.toUpperCase()
          // 
        }
        this.pokemonInfo = pokemon
        console.log(this.pokemonInfo)
      }
    )
  }

}
