<script setup>
	import Button from "../components/Button.vue"
</script>

<template>
	<div class="flex justify-center items-center flex-col gap-[30px] px-12 py-12 bg-[#F9F9F9] h-screen">
		<div class="banner h-[288px] w-[325px]"></div>
		<h1 class="text-2xl font-bold text-[#353535]">
			Welcome to Pokédex
		</h1>
		<h3 class="max-w-[500px] text-center text-[#5E5E5E]">
			The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
		</h3>
		<Button 
			text="Get started" 
			to="/load" 
		></Button>
	</div>

</template>

<style>
.banner {
	background-image: url('../assets/Mask-Group.webp');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>