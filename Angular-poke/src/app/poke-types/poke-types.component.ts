import { Component, OnInit } from '@angular/core';
import { TYPES } from '../mock-types';

@Component({
  selector: 'app-poke-types',
  templateUrl: './poke-types.component.html',
  styleUrls: ['./poke-types.component.css']
})
export class PokeTypesComponent implements OnInit {

  types = TYPES;
  constructor() { }

  ngOnInit(): void {
  }

}
