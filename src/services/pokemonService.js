import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'

export const getAllPokemon = async (limit = 100000, offset = 0) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon`, {
            params: { limit, offset }
        })
        return response.data.results // retorna un array de objetos con name y url
    } catch (error) {
        console.error('Error al obtener los Pokémon:', error)
        throw error
    }
}

export const getPokemonById = async (name) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${name}`)
        return response.data // Aquí devolvemos toda la data del Pokémon
    } catch (error) {
        console.error('Error al obtener la información del Pokémon:', error)
        throw error
    }
}
