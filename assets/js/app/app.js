import Navigation from "./components/navigation.js";
import Home from "./pages/home.js";
import Projects from "./pages/projects.js";
import Talks from "./pages/talks.js";

import db from "./db.js";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/talks", component: Talks },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});

const app = Vue.createApp({
  data() {
    return {
      db,
    };
  },
});
app.use(router);
app.component("Navigation", Navigation);
app.mount("#app");
