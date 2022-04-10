package com.mekomon.pokemon.exception;

public class PokemonNotFoundException extends RuntimeException{
    public PokemonNotFoundException(String message){
        super(message);
    }
}
