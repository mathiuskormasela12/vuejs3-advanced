<template>
	<div>
		<router-link to="/">Home</router-link>
		<router-link to="/about/mathius">About</router-link>
		<router-view />
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Navbar",
};
</script>
