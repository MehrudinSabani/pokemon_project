package com.mekomon.pokemon.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="pokemon")
public class Pokemon implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "image")
    private String image;

    @ManyToOne
    @JoinColumn(name = "type", nullable = false)
    private PokeType type;

    @Column(name = "moves")
    private String moves;

    @Column(name = "pokedex_nr")
    private String pokedexNr;

    public Pokemon() {
    }


    public Pokemon(String name, String image, PokeType type, String moves, String pokedexNr) {
        this.name = name;
        this.image = image;
        this.type = type;
        this.moves = moves;
        this.pokedexNr = pokedexNr;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImage() {
        return image;
    }

    public PokeType getType() {
        return type;
    }

    public String getMoves() {
        return moves;
    }

    public String getPokedexNr() {
        return pokedexNr;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setType(PokeType type) {
        this.type = type;
    }

    public void setMoves(String moves) {
        this.moves = moves;
    }

    public void setPokedexNr(String pokedexNr) {
        this.pokedexNr = pokedexNr;
    }

//    @Override
//    public String toString() {
//        return "Pokemon{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", image='" + image + '\'' +
//                ", type='" + type + '\'' +
//                ", moves='" + moves + '\'' +
//                ", pokedexNr='" + pokedexNr + '\'' +
//                '}';
//    }

}
