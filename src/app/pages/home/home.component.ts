import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { InfoPokemon} from 'src/app/models/IPokemon';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  nomesPok: string[];
  info: InfoPokemon;
  inputPok: string;
  status: string = '';

  constructor(public pokemonService: PokemonService, ) { }

  ngOnInit(): void {
    this.getListNames();
  }

  getListNames(){
    this.pokemonService.apiGetName().subscribe(data => {
      this.nomesPok = data.results.map((value) => value.name);
    }, error => this.status = 'error interno');
  }

  handleName(name: string){
    this.info = null;
    this.status = 'Aguarde...';
    this.pokemonService.apiGetInfo(name).subscribe(data => {
      this.info = data;
    }, err =>{
       console.log(err);
      this.info = null;
      this.status = 'Pokemon não encontrado.'
    });
  }

  searchPokemon(){
    this.info = null;
    this.status = 'Aguarde...';
    if(!this.inputPok) return this.status = 'Campo vazio.';
    this.handleName(this.inputPok);
  }

}
