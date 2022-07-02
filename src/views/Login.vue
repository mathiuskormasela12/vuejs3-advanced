<template>
	<div>
		<h1>Login</h1>
		<input type="text" placeholder="Username..." v-model="username" />
		<input type="password" placeholder="Password..." v-model="password" />
		<button type="button" @click="login">Login</button>
	</div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Login",

	setup() {
		const router = useRouter();
		const username = ref("");
		const password = ref("");

		const login = () => {
			if (username.value === "admin" && password.value === "admin") {
				localStorage.setItem("token", Date.now());
				router.push("/");
			}
		};

		return {
			username,
			password,
			login,
		};
	},
};
</script>
