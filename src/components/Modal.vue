<script setup>
import {onMounted, onUnmounted } from 'vue'
import IconClose from "../assets/Icons/Close.svg"

const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true
	}
})

const emit = defineEmits(['close'])

function handleKeydown(e) {
	if (e.key === 'Escape') emit('close')
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))

function handleOverlayClick(event) {
	if (event.target === event.currentTarget) {
		emit('close')
	}
}
</script>

<template>
	<transition name="fade">
		<div
			v-if="isOpen"
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6"
			@click="handleOverlayClick"
		>
			<div class="bg-backgroundSecondary rounded-general shadow-lg w-[570px] h-[506px] relative">
				<button 
					@click="$emit('close')"
					class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
					aria-label="Cerrar"
				>
					<img :src="IconClose" alt="icon-close">
				</button>
				<slot />
			</div>
		</div>
	</transition>
</template>
