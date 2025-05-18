<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import Button from './Button.vue'
import IconStarOff from '../assets/Icons/StarOff.svg'
import IconStarOn from '../assets/Icons/StarOn.svg'
import Modal from './Modal.vue'

const TextButton = ref('Share to my friends')

const props = defineProps({
	isOpen: Boolean,
	selectedPokemon: {
		type: Object,
		required: true
	}
})

const emits = defineEmits(['close', 'toggle-favorite'])

function handleFavoriteClick() {
	emits('toggle-favorite')
}

const copyToClipboard = async (text) => {
	const textCopy = `Name: ${text.name}, Weight: ${text.weight}, Height: ${text.height}, Types: ${text.types.join(', ')}, Favorite: ${text.favorite}`
	try {
		await navigator.clipboard.writeText(textCopy)
		TextButton.value = 'Copied to clipboard!'
		setTimeout(()=>{
			TextButton.value = 'Share to my friends'
		}, 2000)
	} catch (err) {
		alert('Failed to copy: ' + err)
	}
}
</script>

<template>
	<Modal :isOpen="isOpen" @close="$emit('close')">
		<div class="bannerModal h-[220px] w-auto rounded-t-lg flex items-center justify-center">
			<img :src="selectedPokemon.sprite" alt="pokemon-sprite" class="h-[220px] w-auto" />
		</div>
		<div class="px-8 py-2">
			<p
				class="h-[50px] flex capitalize gap-2 items-center border border-transparent border-b-[#E8E8E8] text-[#5E5E5E]">
				<b>Name:</b> {{ selectedPokemon.name }}
			</p>
			<div class="h-[50px] flex gap-2 items-center border border-transparent border-b-[#E8E8E8] text-[#5E5E5E]">
				<b>Weight:</b> {{ selectedPokemon.weight }}
			</div>
			<div class="h-[50px] flex gap-2 items-center border border-transparent border-b-[#E8E8E8] text-[#5E5E5E]">
				<b>Height:</b> {{ selectedPokemon.height }}
			</div>
			<div
				class="h-[50px] border capitalize flex gap-2 items-center border-transparent border-b-[#E8E8E8] text-[#5E5E5E]">
				<b>Types:</b> {{ selectedPokemon.types.join(', ') }}
			</div>
		</div>
		<div class="flex items-center justify-between px-8 py-2">
			<Button :text="TextButton" @click="copyToClipboard(selectedPokemon)" />
			<div class="w-[44px] h-[44px] rounded-full flex items-center justify-center bg-gray-100 transition"
				@click="handleFavoriteClick">
				<img :src="selectedPokemon.favorite ? IconStarOn : IconStarOff" alt="icon-star"
					class="h-[26px] w-[26px]" />
			</div>
		</div>
	</Modal>
</template>

<style scoped>
.bannerModal {
	background-image: url('../assets/Back.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
