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
        toggleFavorite(name) {
            const index = this.pokemons.findIndex(p => p.name === name)
            if (index !== -1) {
                this.pokemons[index].favorite = !this.pokemons[index].favorite
            }
        }
    },
    persist: true
})
