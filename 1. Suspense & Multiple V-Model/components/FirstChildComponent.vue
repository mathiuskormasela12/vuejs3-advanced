<template>
	<div>
		<p>First Child Component</p>
		{{ name }}
		<input v-model="secondData1" />
		<input v-model="secondData2" />
	</div>
</template>

<script>
import { computed } from "vue";
import { ref } from "vue";

export default {
	name: "FirstChildComponent",
	props: {
		data1: {
			type: String,
			default: "",
		},
		data2: {
			type: String,
			default: "",
		},
	},
	async setup(props, { emit }) {
		const name = ref("");

		const changeData = () => {
			return new Promise((resolve) => {
				setTimeout(() => {
					name.value = "Mathius";
					resolve(true);
				}, [2000]);
			});
		};

		const secondData1 = computed({
			get() {
				return props.data1;
			},
			set(val) {
				emit("update:data1", val);
			},
		});

		const secondData2 = computed({
			get() {
				return props.data2;
			},
			set(val) {
				emit("update:data2", val);
			},
		});

		await changeData();

		return {
			name,
			secondData1,
			secondData2,
		};
	},
};
</script>
