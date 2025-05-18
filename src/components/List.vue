<script setup>
import { getPokemonById } from '../services/pokemonService.js'
import IconStarOff from '../assets/Icons/StarOff.svg'
import IconStarOn from '../assets/Icons/StarOn.svg'
import NotFoundView from '../views/NotFoundView.vue'

const props = defineProps({
	items: {
		type: Array,
		required: true,
		default: () => []
	},
	onItemClick: Function,
	onItemClickFavorite: Function
})

async function handleItemClick(item, index) {
	try {
		const fullData = await getPokemonById(item.name)
		if (typeof props.onItemClick === 'function') {
			props.onItemClick({...fullData, favorite: item.favorite || false, index: index })
		}
	} catch (error) {
		console.error('Error al obtener los datos del Pokémon:', error)
	}
}

function toggleFavorite(item) {
	if (typeof props.onItemClickFavorite === 'function') {
		props.onItemClickFavorite(item)
	}
}
</script>

<template>
	<div class="space-y-3" v-if="items.length > 0">
		<div v-for="(item, index)  in props.items" :key="item.id"
			class="flex items-center justify-between bg-backgroundSecondary p-4 h-[60px] rounded-general shadow-sm hover:shadow-md transition cursor-pointer"
			@click="handleItemClick(item, index)">
			<span class="text-[22px] font-medium text-textColorTitle capitalize">{{ item.name }}</span>
			<button @click.stop="toggleFavorite(item)"
				class="w-[44px] h-[44px] rounded-full flex items-center justify-center bg-background transition"
				:aria-label="`Toggle favorite for ${item.name}`">
				<img :src="item.favorite ? IconStarOn : IconStarOff" alt="icon-star" class="h-[26px] w-[26px]" />
			</button>
		</div>
	</div>
	<div class="mt-[-150px]" v-else>
		<NotFoundView />
	</div>
</template>
