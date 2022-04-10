import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const pokemon = [
      {id:1, name: "Squirtle", image:"assets/images/squirtle.png", type:"water", moves: ['water gun','bubble beam']},
  
      {id:2, name: "Bulbasaur", image:"assets/images/bulba.png", type:"grass", moves: ['leaf blade', 'bullet seed']},
  
      {id:3, name: "Charmander", image:"assets/images/fire.png", type:"fire", moves: ['dragon breath', 'flamethrower', 'tackle', 'flame burst']}
  
  ];
  return {pokemon};
  }
  genId(pokemon: Pokemon[]) : number{
    return pokemon.length > 0? Math.max(...pokemon.map(poke => poke.id)) + 1: 11;
  }
}
