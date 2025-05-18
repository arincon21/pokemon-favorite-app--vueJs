<script setup>
const props = defineProps({
	icon: {
		type: [String, Object],
		default: null
	},
	onInput: {
		type: Function,
		default: null
	},
	modelValue: {
		type: String,
		default: ''
	},
	placeholder: {
		type: String,
		default: ''
	}
})

const emit = defineEmits(['update:modelValue'])

function handleInput(event) {
	const value = event.target.value
	emit('update:modelValue', value)
	if (typeof props.onInput === 'function') {
		props.onInput(value)
	}
}
</script>

<template>
	<div
		class="flex items-center rounded-general px-4 py-1 gap-2 w-full h-[50px] shadow-general bg-backgroundSecondary">
		<template v-if="props.icon">
			<img v-if="typeof props.icon === 'string'" :src="props.icon" alt="icon" class="w-5 h-5" />
			<component v-else :is="props.icon" class="w-5 h-5" />
		</template>
		<input class="flex-1 outline-none" type="text" :value="props.modelValue" :placeholder="props.placeholder"
			@input="handleInput" />
	</div>
</template>
