import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Navbar from "./components/Navbar.vue";

const routes = [
	{
		path: "/",
		component: Navbar,
		children: [
			{
				path: "/",
				name: "Home",
				component: Home,
			},
			{
				path: "/about/:name",
				name: "About",
				component: About,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
