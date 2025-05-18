<script setup>
import Button from "../components/Button.vue"
</script>

<template>
	<div class="flex flex-col items-center justify-center min-h-[500px] gap-5">
		<h1 class="text-[36px] text-textColorTitle">Uh-oh!</h1>
		<h3 class="text-textColor">You look lost on your journey!</h3>
		<Button text="Go back home" to="/"></Button>
	</div>
</template>