import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPokeComponent } from './edit-poke/edit-poke.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { PokeTypesComponent } from './poke-types/poke-types.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonsComponent } from './pokemons/pokemons.component';


const routes: Routes = [
  {path: 'poke-types', component: PokeTypesComponent},
  {path: 'home/poke-detail/:id', component: PokeDetailComponent},
  {path: 'home', component: PokemonsComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'edit-poke/:id', component: EditPokeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
