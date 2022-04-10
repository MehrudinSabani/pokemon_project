import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../poke.service';
import { Pokemon } from '../pokemon';
import { Observable, of } from 'rxjs';
//import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];


  constructor(private pokeService: PokeService) { }

  ngOnInit(): void { 
    //calling the method to retrieve the poke, it can also be called in constructor(bad practice)
    this.getPoke();
   }

  //retreiveng the pokemon from the service
  getPoke(): void{
    // old call without observable 
    //this.pokemons  = this.pokeService.getPoke()
    this.pokeService.getPoke()
    //this line is added after implementing observable in the poke.service
      .subscribe(pokemons => this.pokemons = pokemons)
  }

}
