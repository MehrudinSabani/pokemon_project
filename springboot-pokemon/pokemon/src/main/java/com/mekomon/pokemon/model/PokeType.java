package com.mekomon.pokemon.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="poke_type")
public class PokeType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "type_name")
    private String typeName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "type")
    private Set<Pokemon> pokemons;

    public PokeType() {
    }

    public PokeType(String pokeType) {
        this.typeName = pokeType;
    }

    public Long getId() {
        return id;
    }

    public String getPokeType() {
        return typeName;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setPokeType(String pokeType) {
        this.typeName = pokeType;
    }

    @Override
    public String toString() {
        return "PokeType{" +
                "id=" + id +
                ", pokeType='" + typeName + '\'' +
                '}';
    }
}
