package com.mekomon.pokemon.service;

import com.mekomon.pokemon.exception.PokemonNotFoundException;
import com.mekomon.pokemon.model.Pokemon;
import com.mekomon.pokemon.repo.PokemonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PokemonService {

    private final PokemonRepo pokemonRepo;

    @Autowired
    public PokemonService(PokemonRepo pokemonRepo) {
        this.pokemonRepo = pokemonRepo;
    }

    public Pokemon addPokemon(Pokemon pokemon){
        return pokemonRepo.save(pokemon);
    }
    public List<Pokemon> findAllPokemon(){
        return pokemonRepo.findAll();
    }
    public Pokemon updatePokemon(Pokemon pokemon){
        return pokemonRepo.save(pokemon);
    }
    public Pokemon findPokemonById(Long id){
        return pokemonRepo.findPokemonById(id)
                .orElseThrow(()-> new PokemonNotFoundException("Pokemon with an id " + id + " was not found!"));
    }
    public void deletePokemon(Long id){
        pokemonRepo.deletePokemonById(id);
    }
}
