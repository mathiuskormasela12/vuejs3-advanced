<template>
	<div>
		<router-link to="/">Home</router-link>
		<router-link to="/about/mathius">About</router-link>
		<h1>About {{ name }}</h1>
	</div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "About",

	setup() {
		const route = useRoute();

		return {
			name: route.params.name,
		};
	},
};
</script>
