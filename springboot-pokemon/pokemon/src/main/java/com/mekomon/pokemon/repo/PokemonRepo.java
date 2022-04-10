package com.mekomon.pokemon.repo;

import com.mekomon.pokemon.model.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PokemonRepo extends JpaRepository<Pokemon, Long> {


    Optional <Pokemon> findPokemonById(Long id);

    void deletePokemonById(Long id);
}
