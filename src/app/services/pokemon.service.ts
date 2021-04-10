import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {NamePokemon, InfoPokemon} from 'src/app/models/IPokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public apiGetName(): Observable<NamePokemon>{
    return this.http.get<NamePokemon>('https://pokeapi.co/api/v2/pokemon?limit=100');
  }

  public apiGetInfo(endpoint: string): Observable<InfoPokemon>{
    return this.http.get<InfoPokemon>(`https://pokeapi.co/api/v2/pokemon/${endpoint}`);
  }

}
