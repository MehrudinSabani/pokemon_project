import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
import { PokedexComponent } from './pokedex/pokedex.component';
import { EditPokeComponent } from './edit-poke/edit-poke.component';
import { FormsModule } from '@angular/forms';
import { PokeTypesComponent } from './poke-types/poke-types.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokeDetailComponent,
    DashboardComponent,
    PokedexComponent,
    EditPokeComponent,
    PokeTypesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
  //   HttpClientInMemoryWebApiModule.forRoot(
  //   InMemoryDataService, { dataEncapsulation: false }
  // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
