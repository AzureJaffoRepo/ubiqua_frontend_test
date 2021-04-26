import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokelist: any = [];
  constructor(private pokeApi: PokeApiService,
              private router: Router) { }

  ngOnInit(): void {
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

  openPokemonInfo(id: number) {
    console.log(id)
    this.router.navigate(['/pokemon-info'])
    localStorage.setItem("pokeID", ""+id);
  }

  openPokemonTeam() {
    //console.log(id)
    this.router.navigate(['/pokemon-team'])
    //localStorage.setItem("pokeID", ""+id);
  }

}
