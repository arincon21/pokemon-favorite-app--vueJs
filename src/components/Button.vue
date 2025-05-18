<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
	text: {
		type: String,
		required: true
	},
	icon: {
		type: [String, Object],
		default: null
	},
	onClick: {
		type: Function,
		default: null
	},
	to: {
		type: String,
		default: ''
	},
	secondary: {
		type: Boolean,
		default: false
	},
	minWidth: {
		type: Boolean,
		default: false
	}
})

const router = useRouter()

function handleClick() {
	if (typeof props.onClick === 'function') {
		props.onClick()
	}

	if (props.to) {
		router.push(props.to)
	}
}
</script>

<template>
	<button class="flex text-buttonText items-center h-[44px] justify-center gap-2 px-4 py-2 rounded-full transition font-medium" 
	:class="[
		secondary
			? 'bg-secondaryButton'
			: 'bg-primaryButton  hover:bg-primaryButtonHover',
		minWidth
			? 'md:min-w-[275px] min-w-[150px]'
			: ''
	]" 
	@click="handleClick">
		<template v-if="icon">
			<img v-if="typeof icon === 'string'" :src="icon" alt="icon" class="w-5 h-5" />
			<component v-else :is="icon" class="w-5 h-5" />
		</template>
		<span>{{ text }}</span>
	</button>
</template>
