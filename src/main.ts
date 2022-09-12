import { createApp } from "vue";
import "./style.css";
import App from "./App";
import VXETable from "@/plugins/VXETable";

createApp(App).use(VXETable).mount("#app");
