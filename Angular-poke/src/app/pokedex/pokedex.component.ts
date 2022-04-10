import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/poke.service';
import { Pokemon } from '../pokemon';
import { NgForm } from '@angular/forms';
import { TYPES } from '../mock-types';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public pokemon!: Pokemon[];

  public deletePoke!: Pokemon;
  
  //mock types
  types = TYPES;

  public editPokemon!: Pokemon;

  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit(): void {
    this.getPoke();
  }

  getPoke(): void{
    this.pokeService.getPoke()
    .subscribe(pokemon => this.pokemon = pokemon)

  }

  onAddPoke(addForm: NgForm):void{
    document.getElementById('add-pokemon-form')?.click();
    this.pokeService.addPoke(addForm.value).subscribe(
      (respone: Pokemon) => {
        console.log(respone);
        this.getPoke();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
         }
    );
  }


  onEditPoke(pokemon: Pokemon): void{
    this.pokeService.addPoke(pokemon).subscribe(
      (response: Pokemon) => {
        this.getPoke();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeletePoke(pokeId: number): void{
    this.pokeService.deletePoke(pokeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPoke();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )

  }

  //programatically adding a button
  public onOpenModal(pokemon: Pokemon, mode: string): void{
    const container = document.getElementById('main-container')
    const button = document.createElement('button')
    //changing the type from default (submit) to button
    button.type = 'button'; 
    //none means that its hidden in the UI
    button.style.display = 'none';
    //We are doing this because the template uses modals (bootstrap v4), skip to 1:45 min in tutorial for more info
    button.setAttribute('data-toggle', 'modal')
    if (mode === 'add'){
      // the add update deleteEmployee modals are all defined in html file as id's
      button.setAttribute('data-target', '#addPokemonModal')
    }
    if (mode === 'edit'){

      //whenever a user clicks an employee in the UI, we pass that same emploee in this class
      //So now we can use that same employee to bind it into the form in the html file
      this.editPokemon = pokemon;
      button.setAttribute('data-target', '#editpokemonmodal')
    }
    if (mode === 'delete'){
      this.deletePoke = pokemon;
      button.setAttribute('data-target', '#removepokemonmodal')
    }

    //we add the button inside the div, main-container
    container?.appendChild(button)
    button.click();
  }

}
