import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public screenMode: number = 0;
  public pokelist: any = [];
  public pokeTeam: any = [];
  public pokemonInfo: any = {}

  constructor(private pokeApi: PokeApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPokeList();
  }

  getPokeList() {
    this.pokelist = []
    this.pokeApi.getAllPokemon().subscribe(
      (pokemons:any) => {
        //console.log(pokemons);
        for(let i = 0; i < 10; i++){
          for(let j = 0; j < pokemons[i].Types.length; j++){
            //console.log(pokemons[i].Types[j].type.name.toUpperCase());
            pokemons[i].Types[j].type.name = pokemons[i].Types[j].type.name.toUpperCase()
          }
          this.pokelist.push(pokemons[i]);
        }
        console.log(this.pokelist)
      }
    )
  }
 
  getPokemonInfo(id: number) {
    this.pokemonInfo = {}
    this.pokeApi.getPokemonDetail(id).subscribe(
      (pokemon: any)=> {
        // console.log(pokemon);
        for(let j = 0; j < pokemon.Types.length; j++){
          console.log(pokemon.Types[j].type);
          pokemon.Types[j].type.name = pokemon.Types[j].type.name.toUpperCase()
        }
        this.pokemonInfo = pokemon
        // console.log(this.pokemonInfo)
        
        if(this.pokeTeam.length == 6) {
          document.getElementById("teamfull").click();
        } else {
          if(this.pokeTeam.length < 6){
            this.pokeTeam.push(this.pokemonInfo);
          } 
        }
        
      }
    )
  }

  openPokemonInfo(id: number) {
    this.screenMode = 1;
    this.getPokemonInfo(id)
  }

  openPokemonTeam() {
    this.screenMode = 2;
    this.pokelist = this.pokeTeam;
  }

  closePokemonTeam() {
    this.screenMode = 0;
    this.getPokeList();
  }

  
  closePokemonInfo(){
    this.screenMode = 0;
    this.getPokeList();
  }

}
