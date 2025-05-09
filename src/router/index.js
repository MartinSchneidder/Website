//old
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import GroupView from "../views/GroupView.vue";
import LoginView from "../views/LoginView.vue";
import NewGroupsView from "../views/NewGroupsView.vue";
import { useAuthStore } from "@/pinia/authStore";

const routes = [
  { path: "/", name: "login", component: LoginView },
  { path: "/home", name: "home", component: HomeView },
  { path: "/group", name: "groupview", component: GroupView },
  {
    path: "/group/:groupId",
    name: "GroupView",
    component: GroupView,
    props: true,
  }, // Dynamische Route für Gruppen
  { path: "/newgroups", name: "newgroups", component: NewGroupsView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  const protectedRoutes = ["/group", "/newgroups", "/home"];

  const needsAuth = protectedRoutes.some((path) => to.path.startsWith(path));

  if (needsAuth && !authStore.user) {
    next("/");
  } else {
    next();
  }
});

export default router;
