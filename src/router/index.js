import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import GroupView from "../views/GroupView.vue";
import LoginView from "../views/LoginView.vue";
import NewGroupsView from "../views/NewGroupsView.vue";

const routes = [
  // { path: "/", name: "home", component: HomeView },
  { path: "/", name: "login", component: LoginView },
  { path: "/home", name: "home", component: HomeView },
  { path: "/group", name: "groupview", component: GroupView }, //NUTZEN?
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

export default router;
