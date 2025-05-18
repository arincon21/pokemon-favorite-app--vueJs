<script setup>
import { onMounted } from 'vue'
import Loader from '../components/Loader.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(async () => {
	setTimeout(() => {
		router.push(`/search`)
	}, 3000)
})
</script>

<template>
	<div class="flex items-center justify-center min-h-screen">
		<Loader />
	</div>
</template>