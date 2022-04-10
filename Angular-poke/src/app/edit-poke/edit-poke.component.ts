import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokeService } from '../../poke.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-edit-poke',
  templateUrl: './edit-poke.component.html',
  styleUrls: ['./../poke-detail/poke-detail.component.css']
})
export class EditPokeComponent implements OnInit {

  pokemon: Pokemon | undefined;
  //columnsToDisplay = ['Pokedex']

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPokeStats();

  }

  getPokeStats(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokeService.getPokeDetail(id)
      .subscribe(pokemon => this.pokemon = pokemon)
  }


  //create service first in order for proper routing to work
}
