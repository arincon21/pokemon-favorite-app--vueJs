// src/stores/pokemonStore.js
import { defineStore } from 'pinia'
import { getAllPokemon } from '../services/pokemonService'

export const usePokemonStore = defineStore('pokemon', {
    state: () => ({
        pokemons: []
    }),
    actions: {
        async fetchPokemons() {
            this.pokemons = await getAllPokemon()
        },
        toggleFavorite(index) {
            if (index !== -1) {
                this.pokemons[index].favorite = !this.pokemons[index].favorite
            }
        }
    },
    persist: true
})
