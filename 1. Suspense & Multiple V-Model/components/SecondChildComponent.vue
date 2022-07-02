<template>
	<div>
		<p @click="parentMethod">Second Child Component</p>
		{{ name }}
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	name: "SecondChildComponent",
	async setup(props, { emit }) {
		const name = ref("");

		const changeData = () => {
			return new Promise((resolve) => {
				setTimeout(() => {
					name.value = "Jung Yerin";
					resolve(true);
				}, [5000]);
			});
		};

		const parentMethod = () => {
			emit("parent-method");
		};

		await changeData();

		return {
			name,
			parentMethod,
		};
	},
};
</script>
