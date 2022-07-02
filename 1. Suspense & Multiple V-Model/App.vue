<template>
	<div>
		<h1>Suspense & Multiple V-Model</h1>
		{{ data1 }}
		-
		{{ data2 }}
		<Suspense>
			<template #default>
				<div>
					<FirstChildComponent v-model:data1="data1" v-model:data2="data2" />
					<SecondChildComponent @parent-method="parentMethod" />
				</div>
			</template>
			<template #fallback>
				<p>Loading..</p>
			</template>
		</Suspense>
	</div>
</template>

<script>
import { ref } from "vue";
import FirstChildComponent from "./components/FirstChildComponent.vue";
import SecondChildComponent from "./components/SecondChildComponent.vue";

export default {
	name: "App",
	components: {
		FirstChildComponent,
		SecondChildComponent,
	},
	setup() {
		const data1 = ref("");
		const data2 = ref("");

		const parentMethod = () => {
			alert("Parent Method");
		};

		return {
			parentMethod,
			data1,
			data2,
		};
	},
};
</script>
