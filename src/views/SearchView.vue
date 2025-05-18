<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import { usePokemonStore } from '../stores/pokemonStore'
import { storeToRefs } from 'pinia'
import Input from "../components/Input.vue"
import NavBar from "../components/NavBar.vue"
import Button from "../components/Button.vue"
import List from "../components/List.vue"
import Loader from '../components/Loader.vue'
import ModalPokemonInfo from '../components/ModalPokemonInfo.vue'
import IconSearch from "../assets/Icons/Search.svg"
import IconAll from "../assets/Icons/All.svg"
import IconFavorite from "../assets/Icons/Favorite.svg"

const showModal = ref(false)
const loader = ref(false)
const selectedPokemon = reactive({
	id: null,
	name: '',
	height: null,
	weight: null,
	types: [],
	sprite: '',
	favorite: false
})

const pokemonStore = usePokemonStore()
const { pokemons } = storeToRefs(pokemonStore)

const searchQuery = ref('')
function handleTyping(value) {
	searchQuery.value = value
}

const showOnlyFavorites = ref(false)

const filteredPokemons = computed(() =>
	pokemons.value.filter(pokemon => {
		const matchesSearch = pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
		const isFavorite = !showOnlyFavorites.value || pokemon.favorite === true
		return matchesSearch && isFavorite
	})
)

function onItemClick(fullData) {
	selectedPokemon.id = fullData.id
	selectedPokemon.name = fullData.name
	selectedPokemon.height = fullData.height
	selectedPokemon.weight = fullData.weight
	selectedPokemon.types = fullData.types.map(type => type.type.name)
	selectedPokemon.sprite = fullData.sprites.front_default
	selectedPokemon.favorite = fullData.favorite || false
	selectedPokemon.index = fullData.index

	showModal.value = true
}

function showAllPokemons() {
	showOnlyFavorites.value = false
}

function showFavoritesOnly() {
	showOnlyFavorites.value = true
}

function onItemClickFavorite(fullData) {
	pokemonStore.toggleFavorite(fullData.name)

	if (fullData && selectedPokemon.id === fullData.id) {
		selectedPokemon.favorite = !selectedPokemon.favorite
	}
}

onMounted(async () => {
	if (pokemons.value.length === 0) {
		loader.value = true
		await pokemonStore.fetchPokemons()
		loader.value = false
	}
})
</script>

<template>
	<div class="p-12 bg-background min-h-screen justify-center md:flex">
		<div class="flex flex-col gap-8 md:min-w-[570px] mb-[90px]">
			<Input placeholder="Search" :icon="IconSearch" :onInput="handleTyping" />
			<Loader v-if="loader"></Loader>
			<List v-if="!loader" :items="filteredPokemons" :onItemClick="onItemClick"
				:onItemClickFavorite="onItemClickFavorite" />

		</div>
	</div>
	<NavBar>
		<Button text="All" :icon="IconAll" :minWidth="true" @click="showAllPokemons" :secondary="showOnlyFavorites" />
		<Button text="Favorites" :icon="IconFavorite" :minWidth="true" :secondary="!showOnlyFavorites"
			@click="showFavoritesOnly" />
	</NavBar>
	<ModalPokemonInfo :isOpen="showModal" :selectedPokemon="selectedPokemon" @close="showModal = false"
		@toggle-favorite="onItemClickFavorite(selectedPokemon)" />
</template>
