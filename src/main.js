import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const helloYou = (name) => {
  name = "you" || name;
  console.log("hello" + name + "!");
};

const app = createApp(App);

// Pinia Store verwenden
app.use(createPinia());

app.mount("#app");
