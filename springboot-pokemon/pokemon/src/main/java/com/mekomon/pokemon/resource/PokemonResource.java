package com.mekomon.pokemon.resource;

import com.mekomon.pokemon.model.Pokemon;
import com.mekomon.pokemon.service.PokemonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/home")
public class PokemonResource {
    private final PokemonService pokemonService;


    public PokemonResource(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    //homepage displays all pokemon in the database
    @GetMapping("")
    public ResponseEntity<List<Pokemon>> getAllPokemon(){
        List<Pokemon> pokemons = pokemonService.findAllPokemon();
        return new ResponseEntity<>(pokemons, HttpStatus.OK);
    }

    @GetMapping("/poke-detail/{id}")
    public ResponseEntity<Pokemon> getPokemonById(@PathVariable("id") Long id){
        Pokemon pokemon = pokemonService.findPokemonById(id);
        return new ResponseEntity<>(pokemon, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Pokemon> addPokemon(@RequestBody Pokemon pokemon){
        Pokemon newPokemon = pokemonService.addPokemon(pokemon);
        return new ResponseEntity<>(newPokemon, HttpStatus.CREATED);
    }
    @PutMapping("/edit")
    public ResponseEntity<Pokemon> editPokemon(@RequestBody Pokemon pokemon){
        Pokemon updatePokemon = pokemonService.updatePokemon(pokemon);
        return new ResponseEntity<>(updatePokemon, HttpStatus.OK);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deletePokemon(@PathVariable("id") Long id){
        pokemonService.deletePokemon(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
