import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Navbar from "./components/Navbar.vue";
import Login from "./views/Login.vue";

const routes = [
	{
		path: "/login",
		component: Login,
		name: "Login",
	},
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

router.beforeEach((to, from, next) => {
	const token = localStorage.getItem("token");

	if (!token && to.name !== "Login") {
		next({ name: "Login" });
	} else if (token && to.name === "Login") {
		next({ name: "Home" });
	} else {
		next();
	}
});

export default router;
