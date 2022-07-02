<template>
	<div>
		<router-link to="/">Home</router-link>
		<router-link to="/about/mathius">About</router-link>
		<router-link to="" @click="logout">Logout</router-link>
		<router-view />
	</div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Navbar",
	setup() {
		const router = useRouter();

		const logout = () => {
			localStorage.removeItem("token");
			router.push("/login");
		};

		return {
			logout,
		};
	},
};
</script>
