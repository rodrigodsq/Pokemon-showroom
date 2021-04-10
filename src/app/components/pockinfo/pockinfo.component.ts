import { Component, Input, OnInit } from '@angular/core';
import { InfoPokemon } from 'src/app/models/IPokemon';

@Component({
  selector: 'app-pockinfo',
  templateUrl: './pockinfo.component.html',
  styleUrls: ['./pockinfo.component.scss']
})
export class PockinfoComponent implements OnInit {

  @Input() info: InfoPokemon;
  @Input() status: string;

  constructor() { }

  ngOnInit(): void {
  }

}
