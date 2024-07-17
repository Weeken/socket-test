import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { initSocket } from "./socket";

createApp(App).mount("#app");

initSocket();
