import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getAllPokemon() {
    return this.http.get(environment.pokeAPIURL + "/pokemons").pipe(map(
        (result:any) => result
    ));
  }

  getPokemonDetail(id: number) {
    return this.http.get(environment.pokeAPIURL + "/pokemon/" + id).pipe(map(
        (result:any) => result
    ));
  }

}
